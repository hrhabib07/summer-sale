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
});
 
// product 2 
document.getElementById('product-2').addEventListener('click', function(){
    let productPrice2 = document.getElementById('product-2-price').innerText;
    productPrice2 = parseFloat(productPrice2);
    let productTitle2 = document.getElementById('product-2-title').innerText;
    console.log(productPrice2, productTitle2);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle2;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice2 + totalPrice;
});

// product 3 
document.getElementById('product-3').addEventListener('click', function(){
    let productPrice3 = document.getElementById('product-3-price').innerText;
    productPrice3 = parseFloat(productPrice3);
    let productTitle3 = document.getElementById('product-3-title').innerText;
    console.log(productPrice3, productTitle3);
    const olContainer =  document.getElementById('ol-container');
    let newItem = document.createElement('li');
    newItem.innerText = productTitle3;
    olContainer.appendChild(newItem);
    let totalPrice = document.getElementById('total-price').innerText;
    totalPrice = parseFloat(totalPrice);
    document.getElementById('total-price').innerText = productPrice3 + totalPrice;
});

// product 4 
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