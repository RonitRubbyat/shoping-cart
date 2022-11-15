function updateProductNumber(product, price, isPlus) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isPlus == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;
    // update product total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();
};

function productValue(product) {
    // const productName = document.getElementById(product + '-number').value;
    // return parseFloat(productName);

    const productAmout = document.getElementById(product + '-total').innerText;
    return parseFloat(productAmout);
}

function calculateTotal() {
    // const totalPhone = productValue('phone') * 1219;
    // const totalCase = productValue('case') * 59;
    const totalPhone = productValue('phone');
    const totalCase = productValue('case');
    
    const subTotal = totalPhone + totalCase;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});