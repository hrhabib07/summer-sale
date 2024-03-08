// product-4 
document.getElementById('product-4').addEventListener('click', function(){
    let productPrice4 = document.getElementById('product-4-price').innerText;
    productPrice4 = parseFloat(productPrice4);
    let productTitle4 = document.getElementById('product-4-title').innerText;
    console.log(productPrice4, productTitle4);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle4;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice4 + totalPrice;
});