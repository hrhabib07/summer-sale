// product-5 
document.getElementById('product-5').addEventListener('click', function(){
    let productPrice5 = document.getElementById('product-5-price').innerText;
    productPrice5 = parseFloat(productPrice5);
    let productTitle5 = document.getElementById('product-5-title').innerText;
    console.log(productPrice5, productTitle5);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle5;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice5 + totalPrice;
});