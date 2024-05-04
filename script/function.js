function getPrice(elementId){
    const price = document.getElementById(elementId);
    const pricestr = price.innerText;
    const priceInt = parseFloat(pricestr);

    return priceInt;
}


function addElement(itemsTitleID, addID, elementType){
    const elementName = document.getElementById(itemsTitleID);
    const itemsname = elementName.innerText;

    const addwhere = document.getElementById(addID);
    const newElementAdd = document.createElement(elementType);
    const count = addwhere.childElementCount
    newElementAdd.innerHTML = `
    ${count + 1}. ${itemsname} 
    `
    addwhere.appendChild(newElementAdd);
}

function totalPrice(price){
    const taka = document.getElementById("totalTaka");
    const takastr = taka.innerText
    const takaInt = parseFloat(takastr);

    taka.innerText = takaInt+price

    const total = document.getElementById("takaTotal");
    const totastr = total.innerText
    const totalInt = parseFloat(totastr);

    total.innerText = totalInt + price
}


function makePurchase(){
    const takas = getPrice("totalTaka");
    const button = document.getElementById('makePurchase');

    if (takas>0){
        button.disabled = false;
    }
}


function setValue(elementId,values){
    const element = document.getElementById(elementId);
    element.innerText = values;

    
}
