document.getElementById('product-1').addEventListener('click', function(){
    let productPrice1 = document.getElementById('product-1-price').innerText;
    productPrice1 = parseFloat(productPrice1);
    let productTitle1 = document.getElementById('product-1-title').innerText;
    console.log(productPrice1, productTitle1);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle1;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice1 + totalPrice;
})