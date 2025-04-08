// multi-select
const containerClassName = ".multi-select";
function ListItem(value, index, isWithCloseIcon = false) {
    this.value = value;
    this.index = index;
    this.isWithCloseIcon = isWithCloseIcon;
    this.template = this.getTemplate();
}

ListItem.prototype.getTemplate = function() {
    if (this.template) return this.template;
    const c = document.createElement("span");
    const close = document.createElement("span");
    close.classList.add("close-icon");
    const t = document.createElement("span");
    t.innerText = this.value;
    c.appendChild(t);
    c.appendChild(close);
    c.classList.add("list-item");
//    c.style.order = this.index;
    return c;
}

ListItem.prototype.updateTemplate = function() {
    if (!this.template) {
        console.error("not template")
        return;
    }
    if (this.isWithCloseIcon) {
        this.template.classList.add('closable');
        this.template.classList.remove('drop-down-item');
    } else {
        this.template.classList.add('drop-down-item');
        this.template.classList.remove('closable');
    }
}


function List(arrItemsNames) {
    this.values = new Map();
    this.add = function(str, isWithCloseIcon) {
        this.values.set(this.values.size, new ListItem(str, this.values.size))
    }

    this.remove = function(index) {
        this.values.remove(index);
    }

    arrItemsNames.forEach((itemName, index) => {
        this.add(itemName);
    })



}

function MultySelect(parentNode, values) {
    this.values = values;
    this.isVisibleDropDown = false;
    this.dropDown = new SelectDropDown(this.values);
    this.selectInput = new SelectInput();
    this.template = this.getTemplate();
    this.template.setAttribute("tabindex", Array.from(parentNode.parentElement.children).indexOf(parentNode));
    this.dropDown.list.values.forEach(item => {
        item.template.addEventListener('click', () => {
            this.selectInput.add(item);
            item.isWithCloseIcon = true;
            item.updateTemplate();
        })
        const closeIcon = item.template.querySelector('.close-icon');
        closeIcon.addEventListener('click', (e) => {
            this.dropDown.add(item);
            item.isWithCloseIcon = false;
            item.updateTemplate();
            e.stopPropagation();
        })
    })
    this.template.appendChild(this.selectInput.template);
    this.addDropDownEvents();

    parentNode.appendChild(this.template)

}

MultySelect.prototype.getTemplate = function() {
    if (this.template) return this.template;
    const c = document.createElement("div");
    c.classList.add("multy-select-container");
    return c;
}
MultySelect.prototype.addDropDownEvents = function() {
    this.template.addEventListener("focus", () => {
        this.isVisibleDropDown = true;
        this.template.appendChild(this.dropDown.template)
    })

    this.template.addEventListener("blur", () => {
        this.isVisibleDropDown = false;
        this.template.removeChild(this.dropDown.template)
    })
}

function SelectInput() {
    this.template = this.getTemplate();
}
SelectInput.prototype.getTemplate = function() {
    if (this.template) return this.template;
    const c = document.createElement("div");
    c.classList.add("select-input");
    return c;
}
SelectInput.prototype.add = function(item) {
    this.template.appendChild(item.template);
}
SelectInput.prototype.remove = function(item) {
    this.template.removeChild(item.template);
}


function SelectDropDown(listItems) {
    this.list = new List(listItems);
    this.template = this.getTemplate();
}

SelectDropDown.prototype.getTemplate = function() {
    if (this.template) return this.template;
    const c = document.createElement("div");
    this.list.values.forEach(item => {
        c.appendChild(item.template)
    })
    c.classList.add("select-drop-down");
    return c;
}
SelectDropDown.prototype.add = function(item) {
    for (var i = item.index;i >=0; --i) {
        const elIndex = Array.from(this.template.children).indexOf(this.list.values.get(i).template)
        if (elIndex != -1) {
            if (elIndex == this.template.children.length - 1) {
                this.template.appendChild(item.template);
            } else {
                this.template.insertBefore(item.template, this.template.children[elIndex + 1]);
            }
            break;
        }
    }
    if (i < 0) {
        this.template.prepend(item.template);
    }
}




const els = document.querySelectorAll(containerClassName)
const s = [...els].map((e, i) => {
    return new MultySelect(e, ["aaaaaa", "bbbbbbb", "cccccc", "dddddd", "eeeeeee", "fffff"]);
})
console.log(s)

