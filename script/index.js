function firstItem(){
    const price = getPrice("item1");
    

    addElement("item-name1","add-items","p");



    totalPrice(price);

    const button = document.getElementById('makePurchase');
    if (price>0){
        button.disabled = false;
    }

}