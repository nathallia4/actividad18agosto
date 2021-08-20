let items = localStorage.getItem('itemlist')
items = items ? items.split (',') : []
function addItem() {
    let item= document.getElementById('item').value
    if (item){
        item.push(item)
        showItems
    }

}

let array = []


function addItem() {

}
function showItems() {
    document.getElementById('item').value = ''

    let html = ''
    for (let index = 0; index < items.length; index++) {
        html += `<div class="col-10"> ${items[index]} </div>`
        
        html += `<div class="col-2"> <a href="#" class= "btn btn-danger" onclick="delete(${index})">X</a> </div>`
    }

    localStorage.setItem('itemList', items)
    document.getElementById('listado').innerHTML = html
}