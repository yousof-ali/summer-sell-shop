// button enable 

// const inputField = document.getElementById("input-coupon");
// const val = inputField.value;

// console.log(val);

document.getElementById("input-coupon").addEventListener("input", function(){
     const inputField = document.getElementById("input-coupon");
     const val = inputField.value;
     
     const applyBtn = document.getElementById("btn-apply")
     if(val=="SELL200"){
        applyBtn.disabled = false;

    }
})

document.getElementById("btn-apply").addEventListener("click",function(){
    const totalprice = getPrice("totalTaka");
    const totalpriceF = totalprice.toFixed(2);
    
    const discountprice = totalpriceF*20/100;
    const discountpricef = discountprice.toFixed(2)
    
    setValue("discount",discountpricef);


    const nowPaid = totalpriceF-discountpricef;
    const nowpaidf = nowPaid.toFixed(2);
    setValue("takaTotal",nowpaidf);
})