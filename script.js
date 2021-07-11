const listContainer=document.querySelector('[data-list]');
const listForm=document.querySelector('[data-new-list-form]');
const listInput=document.querySelector('[data-new-list-input]');
const listTaskCheck=document.querySelector('[data-check]');
const delButton=document.querySelector('[del_task]');
console.log(delButton);
//
let lists=[];
//console.log(listContainer)

listForm.addEventListener('submit',function(e) {
    //Não volta para 
    console.log(listContainer)
    e.preventDefault();
    const listName=listInput.value;
    if (listName===null || listName==='') {return};
    const listValue=createList(listName);
    listInput.value=null;
    lists.push(listValue);
    render();
    console.log(listContainer)
})

delButton.addEventListener('click', function(e) {
   
    //Não volta para 
    //console.log(listContainer)
    e.preventDefault();
    let lista_checked=[];
    let lista_check_options=document.querySelectorAll("input[type='checkbox']:checked");
    console.log(lista_check_options)
    var lista_array=[];
    lista_check_options.forEach(function(list) {
        clearEspecificElement(listContainer,list.id);
        clearEspecificElement(listTaskCheck,list.id);
        lista_array.push(lists[list.id]);
    })
    lista_array.forEach(function(list){
        const index=lists.indexOf(list)
        console.log(index)
        console.log(list)
        lists.splice(index,1)
        console.log(lists)
    })
    
    
    //selecionar o nome das 
    //clearEspecificElement(listContainer,0);
    //clearEspecificElement(listTaskCheck,0);
})

function render(){
    //Tira o que tem  no container direto
    clearElement(listContainer);
    clearElement(listTaskCheck);
    let i=0;
    lists.forEach(function(list){
        
        //Mas a cada click eu refaço tudo!
        //Crio o tipo de elemento que vai ser criado
        const item=document.createElement('li');
        //Quero colocar um check
        const check=document.createElement('input');
        check.type='checkbox';
        check.id=i;
        check.classList.add('Completed_tasks');
        //Chama a classe de classe item
        item.classList.add('item');
        //O que ta escrito e o valor da lista mesmo
        item.innerText=list.name;
        item.id=i;
        //Coloco o item tendo o mesmo nome do checkbox vamos ver se vai rolar.
        //Quem vai receber isso? A listContainer com o método append Child
        listTaskCheck.appendChild(check)
        listContainer.appendChild(item)
        i++;
    })
}

function createList(nome){
    return {id: Date.now().toString(), name: nome}
} 

function clearElement(element){
    while (element.firstChild){
        element.removeChild(element.firstChild)
    }
}
function clearEspecificElement(element,id){
    let el=document.getElementById(id)
    element.removeChild(el)
}
render()