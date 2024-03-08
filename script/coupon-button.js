let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    

document.getElementById('coupon-button').addEventListener('click', function(){
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    let couponChecker = document.getElementById('coupon-code').value;
    let newTotalPrice = 0;
    if(totalPrice < 200){
        alert("you cannot get discount for less than 200 total shopping. Please Add something more for getting the discount ")
    } else if (couponChecker !== "SELL20"){
        alert("please add a valid coupon code.")
    } else{
        newTotalPrice = (totalPrice/100) * 80;
        document.getElementById('total-price-after-discount').innerText = newTotalPrice.toFixed(2);
        const discountAmount = totalPrice - newTotalPrice;
        document.getElementById('discount-amount').innerText = discountAmount.toFixed(2);
    }
   
})