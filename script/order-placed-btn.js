document.getElementById('order-placed-btn').addEventListener('click', function(){
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    if(totalPrice === 0){
        return
    } else{

        const olContainer = document.getElementById('ol-container');
        olContainer.innerHTML = '';
        document.getElementById('total-price-after-discount').innerText = 0.00;
        document.getElementById('total-price').innerText = 0.00;
        document.getElementById('discount-amount').innerText = 0.00;
    }
})