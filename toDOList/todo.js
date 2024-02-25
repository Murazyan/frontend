var modal;
function PageHeader(childBtn){
    this.childBtn = childBtn;
    this.template =  this.getTemplate();
}

PageHeader.prototype.getTemplate = function (){
    if(this.template) return this.template;
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id','header')
    headerDiv.appendChild(this.childBtn.template)
    return headerDiv;
}

function CustomButton(title, clickCallBack){
    this.title=title;
    this.clickCallBack=clickCallBack;
    this.template=this.getTemplate();

    this.setTitle= function(newTitle){
        this.title = newTitle;
        this.template.innerHTML=this.title;
    }
}

CustomButton.prototype.getTemplate = function (){
    if(this.template) return this.template;
    const btn = document.createElement('button');
    btn.innerHTML = this.title;
    btn.onclick = this.clickCallBack;
    return btn;
}

function TableList(parentNode, colNames, dataSorce){
    this.parentNode = parentNode;
    this.colNames = colNames;
    this.dataSorce = dataSorce;
    this.template = this.getTemplate();
}

TableList.prototype.getTemplate = function (){
    if(this.template) return this.template;
    const table = document.createElement('table');
    //    table head
    const tableHead = document.createElement('thead');
    const theadRow = document.createElement('tr');
    this.colNames.forEach(colName=>{
        const column = document.createElement('th');
        column.innerHTML = colName.name;
        theadRow.appendChild(column);
    })
    tableHead.appendChild(theadRow);
    table.appendChild(tableHead);

    //    table body
    const tableBody = document.createElement('tbody');
    this.dataSorce.forEach(dataObj=>{
        const row = document.createElement('tr');
        this.colNames.forEach(colName=>{
            const column = document.createElement('td');
            if (colName.render) {
                const renderedButtons = colName.render(dataObj, row);
                renderedButtons.forEach(b => {
                    column.appendChild(b.template);
                })
            } else {
                column.innerHTML = dataObj[colName.name];
            }
            row.appendChild(column);
        })

        tableBody.appendChild(row);
    })
    table.appendChild(tableBody);
    return table;
}

function Modal(title, childNodeObj){
    this.title = title;
    this.childNode = childNodeObj.template;
    this.childNodeObj = childNodeObj;
    this.template = this.getTemplate();
    this.show = function(){
        this.template.style.display = "block";
    }
    this.close =function(){
        this.template.style.display = "none";
    }
    this.update = function(title, childNodeObj){
        this.title= title;
        this.childNode = childNodeObj.template;
        this.childNodeObj = childNodeObj;
        const content = document.getElementById('modal-content');
        const titileNode = document.getElementById('modal-title');
        titileNode.innerHTML = this.title;
        content.innerHTML= '';
        content.appendChild(titileNode);
        content.appendChild(this.childNode);
    }
    this.getModalContent = function(){
        return  this.childNodeObj;
    }
}

Modal.prototype.getTemplate = function(){
    if(this.template) return this.template;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.setAttribute('id', 'modal-content');
    const modalTitle = document.createElement('span');
    modalTitle.setAttribute('id', 'modal-title');
    modalTitle.innerHTML=this.title;
    const closeBtn = document.createElement('close');
    closeBtn.classList.add("close");
    closeBtn.innerHTML='&times;';
    modalTitle.innerHTML=this.title;
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(this.childNode)
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    return modal
}

//inputsInfo [{inputLable: inputLable, inputType: type, inputValue: value}]

function ModalContent(inputsInfo, buttons){
    this.inputsInfo = inputsInfo;
    this.buttons = buttons;
    this.inputsMap = new Map();
    this.template = this.getTemplate();

    this.getData = function(){
        return  Array.from(this.inputsMap, ([name, val]) => ({[name]: val.value}));
    }
}

ModalContent.prototype.getTemplate = function(){
    if(this.template) return this.template;
    const form = document.createElement('form');
    this.inputsInfo.forEach(inputInfo=>{
        const inputContainer = document.createElement('div');
        const lable = document.createElement('lable');
        lable.innerHTML=inputInfo.inputLable;
        const input = document.createElement('input');
        input.value = inputInfo.inputValue;
        input.setAttribute('type', inputInfo.inputType);
        inputContainer.appendChild(lable);
        inputContainer.appendChild(input);
        this.inputsMap.set(inputInfo.inputLable, input)
        form.appendChild(inputContainer);
    })
    if(this.buttons){
        const buttonsContainer = document.createElement('div');
        this.buttons.forEach(button=>{
            buttonsContainer.appendChild(button.template);
        })
        form.appendChild(buttonsContainer);
    }

    return form;
}

const run =  ()=>{

    const tableDataSource = [
        {name:"Poxos", surname: "Poxosoyan", ticketDesc: "Login page", role: "Frontend Dev"},
        {name:"Petros", surname: "Petrosyan", ticketDesc: "Login functional", role: "Backend Dev"}
    ];
    const tableColNames = [
        {
            name: 'name',
        },
        {
            name: 'surname'
        },
        {
            name: 'ticketDesc'
        },
        {
            name: 'role'
        },
        {
            name: 'actions',
            render: (rowData, row) => {
                return [
                    new CustomButton('Edit', ()=>{
                        alert("edit row")
                        console.log(row, rowData)
                    }),
                    new CustomButton('Delete', ()=>{
                        alert("Delete row")
                    }),
                    new CustomButton('Show', ()=>{
                        alert("Show row")
                    })]
            }
        }];
    modal =  new Modal('', new ModalContent(tableColNames.filter(col=>!col.render).map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: ''}})));
    document.body.appendChild(modal.template);
    const addRowBtn = new CustomButton('Add', ()=>{
        modal.update("Add new item",
            new ModalContent(tableColNames.filter(col=>!col.render).map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: ''}}),
                [new CustomButton('Cancle', (event)=>{
                    event.preventDefault();
                    modal.close();
                }),
                    new CustomButton("Add", (event)=>{
                        event.preventDefault();
                        modal.close();
                        modal.getModalContent().getData();
                    })]));

        modal.show()
    });
    const pageHeader =  new PageHeader(addRowBtn);
    const tableWrapper =  document.createElement('div');
    tableWrapper.setAttribute('id', 'table-wrapper');

    const tableList = new TableList(tableWrapper, tableColNames, tableDataSource);
    tableWrapper.appendChild(tableList.template);

    const container = document.getElementById("container");
    container.appendChild(pageHeader.template);
    container.appendChild(tableWrapper);

};
run()

for(var i = 0; i<10; ++i){
    setT(i);
}

function setT(i){
    setTimeout(()=>{
        console.log(i+"");
    }, 1000);
}

for(var i = 0; i<10; ++i){
    setTimeout(()=>{
        console.log(i);
    }, 1000);
}