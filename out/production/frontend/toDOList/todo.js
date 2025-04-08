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

function CustomButton(title, clickCallBack, attibutes){
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

TableList.prototype.existRow = function (rowData){
    let exist = this.dataSorce.filter(row=>{
        let found = true;
        for (const [key, value] of Object.entries(rowData)){
            if(row[key] !== value){
                found =  false;
            }
        }
        return found;
    })
    return exist && exist.length > 0;
}

TableList.prototype.addRow = function (rowData){
    if(!this.existRow(rowData)){
        this.dataSorce.push(rowData)
        let tbody = document.getElementById('tbody')
        const row = document.createElement('tr');
        this.colNames.forEach(colName=>{
            const column = document.createElement('td');
            if (colName.render) {
                const renderedButtons = colName.render(rowData, row);
                renderedButtons.forEach(b => {
                    column.appendChild(b.template);
                })
            } else {
                column.innerHTML = rowData[colName.name];
            }
            row.appendChild(column);
            tbody.appendChild(row);
        })
        return true;
    }
    return false;
}

TableList.prototype.editRow = function (oldRowData, newRowData, rowNode){
    if(JSON.stringify(oldRowData)==JSON.stringify(newRowData)){
        return true;
    }
    if(!this.existRow(newRowData)) {
        Object.keys(oldRowData).forEach(key => {
            oldRowData[key] = newRowData[key];
        })
        let childrens =  rowNode.children;
        Object.values(newRowData).forEach((value, i)=>{
            childrens.item(i).innerHTML=value;
        })
        return true;
    }
    return false;

}


TableList.prototype.deleteRow = function (rowData, rowNode){
   let index = this.dataSorce.indexOf(rowData);
    this.dataSorce.splice(index, 1);
    rowNode.remove();

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
    tableBody.setAttribute('id', 'tbody')
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
    this.errorNode = this.getErrorNode();
    this.closeBtn = this.getCloseBtn();
    this.template = this.getTemplate();
    this.show = function(){
        this.template.style.display = "block";
    }
    this.close =function(){
        this.template.style.display = "none";
    }
    this.update = function(title, showError, childNodeObj){
        this.title= title;
        this.childNode = childNodeObj.template;
        this.childNodeObj = childNodeObj;
        const content = document.getElementById('modal-content');
        const titileNode = document.getElementById('modal-title');
        titileNode.innerHTML = this.title;
        content.innerHTML= '';
        content.appendChild(titileNode);
        content.appendChild(this.errorNode);
        content.insertBefore(this.closeBtn, content.firstChild);
        content.appendChild(this.childNode);

        if(showError){
            this.showError();
        }else{
            this.closeError();
        }
    }
    this.getModalContent = function(){
        return  this.childNodeObj;
    }

}

Modal.prototype.getCloseBtn = function(){
    if(this.closeBtn) return this.closeBtn;
    const closeBtn = document.createElement('close');
    closeBtn.classList.add("close");
    closeBtn.innerHTML='&times;';
    closeBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        this.close();
    })
    return closeBtn;
}

Modal.prototype.getErrorNode = function(){
    if(this.errorNode) return this.errorNode;
    const errorDiv = document.createElement('div');
    errorDiv.setAttribute('id', 'modal-error');
    errorDiv.classList.add('modal-error');
    const errorText = document.createElement('span');
    errorText.setAttribute('id', 'modal-error-text');
    errorDiv.appendChild(errorText)
    return errorDiv;
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
  
    modalTitle.innerHTML=this.title;
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(this.errorNode)
    modalContent.appendChild(this.childNode)
    modalContent.insertBefore(this.closeBtn, modalContent.firstChild);
    modal.appendChild(modalContent);
    return modal;
}

Modal.prototype.showError = function(errorText){
    let div = document.getElementById('modal-error')
    let span = document.getElementById('modal-error-text');
    span.innerHTML = errorText;
    div.classList.add("modal-error-show");
    div.classList.remove("modal-error");

}

Modal.prototype.closeError = function(errorText){
    let div = document.getElementById('modal-error')
    div.classList.remove("modal-error-show");
    div.classList.add("modal-error");
}
//inputsInfo [{inputLable: inputLable, inputType: type, inputValue: value}]

function ModalContent(inputsInfo, buttons, formAttributes){
    this.inputsInfo = inputsInfo;
    this.buttons = buttons;
    this.formAttributes = formAttributes;
    this.inputsMap = new Map();
    this.template = this.getTemplate();

    this.getData = function(){
        let model = {};
        this.inputsMap.forEach((val, name )=>model[name]=val.value);
        return model;
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
    if(this.formAttributes){
        this.formAttributes.forEach(atr=>form.setAttribute(atr, atr))
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
                        modal.update("Edit item", false,
                            new ModalContent(tableColNames.filter(col=>!col.render).map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: rowData[col.name]}}),
                                [
                                    new CustomButton('Cancle', (event)=>{
                                        event.preventDefault();
                                        modal.close();
                                    }),
                                    new CustomButton("Edit", (event)=>{
                                        event.preventDefault();
                                        const newRowData = modal.getModalContent().getData()
                                        if(tableList.editRow(rowData, newRowData, row)){
                                            modal.close();
                                        }else{
                                            modal.showError("Record already exists in the table")
                                        }
                                    })]));

                        modal.show()
                    }),
                    new CustomButton('Delete', ()=>{
                        tableList.deleteRow(rowData, row);
                    }),
                    new CustomButton('Show', ()=>{
                        modal.update("Element information", false,
                        new ModalContent(tableColNames.filter(col=>!col.render)
                        .map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: rowData[col.name]}}), [], ['disabled']));

                    modal.show()
                    })]
            }
        }];
    modal =  new Modal('', new ModalContent(tableColNames.filter(col=>!col.render).map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: ''}})));
    document.body.appendChild(modal.template);
    const addRowBtn = new CustomButton('Add', ()=>{
        modal.update("Add new item", false,
            new ModalContent(tableColNames.filter(col=>!col.render).map(col=>{return {inputLable: col.name, inputType: 'text', inputValue: ''}}),
                [new CustomButton('Cancle', (event)=>{
                    event.preventDefault();
                    modal.close();
                }),
                    new CustomButton("Add", (event)=>{
                        event.preventDefault();
                        const rowData = modal.getModalContent().getData()
                        if(tableList.addRow(rowData)){
                            modal.close();
                        }else{
                            modal.showError("Record already exists in the table")
                            console.log('error')
                        }
                        console.log('data {}', modal.getModalContent().getData())
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