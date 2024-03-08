// product-6 
document.getElementById('product-6').addEventListener('click', function(){
    let productPrice6 = document.getElementById('product-6-price').innerText;
    productPrice6 = parseFloat(productPrice6);
    let productTitle6 = document.getElementById('product-6-title').innerText;
    console.log(productPrice6, productTitle6);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle6;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice6 + totalPrice;
});