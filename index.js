function calculateTotalPrice() {
    
    var backQuantity = parseInt(document.getElementById("backbag-quantity").value);
    console.log(backQuantity)
    var shoesQuantity = parseInt(document.getElementById("shoes-quantity").value);
    console.log(shoesQuantity)
    var backPrice = parseFloat(document.getElementById("backbag-new").innerHTML);
    console.log(backPrice)
    var shoesPrice = parseFloat(document.getElementById("shoes-new").innerHTML);
    console.log(shoesPrice)
    var shippingPrice = parseFloat(document.getElementById("shipping-price").innerHTML);
    var total = (backQuantity * backPrice) + (shoesQuantity * shoesPrice) + shippingPrice
    console.log(total)
    document.getElementById('total').innerHTML = "";
    document.getElementById('total').innerHTML = total.toFixed(2);
}

function downFunc(quantity) {
    document.getElementById(quantity).stepDown(1)
    calculateTotalPrice()
}

function upFunc(quantity) {
    document.getElementById(quantity).stepUp(1);
    calculateTotalPrice()
}
