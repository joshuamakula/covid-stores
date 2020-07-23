function validateAddItem() {
    // Declaring valiables for add item
    itemName = document.addItem.itemName;
    itemMake = document.addItem.itemMake;
    entryDate = document.addItem.entryDate;
    category = document.addItem.category;
    serialNumber = document.addItem.serialNumber;
    price = document.addItem.price;
    initialPay = document.addItem.initialPay;
    payInterval = document.addItem.payInterval;
    itemColor = document.addItem.itemColor;
    itemDesc = document.addItem.itemDesc;
    numStock = document.addItem.numStock;
    itemPhoto = document.addItem.itemPhoto;



    // validating Item Name
    var p_itemName = /^[A-Za-z]+$/;
    if (!itemName.value.match(p_itemName)) {
        itemName.style.border = '1px solid red';
        document.getElementById("nameError").innerHTML = "Name of the item should characters only, no numbers";
        // alert('Name of the item should characters only, no numbers');
    }

    // validating make; 2 CAPITAL LETTERS
    var p_itemMake = /^[A-Z]+$/;
    if (!itemMake.value.match(p_itemMake) || (itemMake.value.length != 2)) {
        itemMake.style.border = '1px solid red';
        document.getElementById("makeError").innerHTML = "Make should be 2 characters all in capital letters";
        // alert('Make should be 2 characters all in capital letters');
    }

    // validating serial number
    var minLength = 6;
    var maxLength = 22;
    var p_serialNumber = /^[0-9a-zA-Z]+$/;
    if (!serialNumber.value.match(p_serialNumber) || (serialNumber.value.length < minLength) || (serialNumber.value.length > maxLength)) {
        serialNumber.style.border = '1px solid red';
        document.getElementById("serialError").innerHTML = "Serial number should be betwee 6 & 22 alphanumeric characters.";
        // alert('serial number should be betwee 6 & 22 alphanumeric characters.');
    }

    // validating the price
    var objRegex = /^[0-9]+$/;
    if (!price.value.match(objRegex)) {
        price.style.border = '1px solid red';
        document.getElementById("priceError").innerHTML = "Price should be a number";
        // alert('Price should be a  ending with .00');
    }

    // validating the initial pay
    // var p_initialPay = /^[0-9]+$/;
    if (!initialPay.value.match(objRegex)) {
        initialPay.style.border = '1px solid red';
        document.getElementById("initalError").innerHTML = "Inital Pay should be a number ending with .00";
        // alert('Inital Pay should be a number ending with .00');
    }

    // validating the pay interval
    // var p_payInterval = /^[0-9]+$/;
    if (!payInterval.value.match(objRegex)) {
        payInterval.style.border = '1px solid red';
        document.getElementById("payIntError").innerHTML = "Pay Interval should be a number.";
        // alert('Pay Interval should be a number.');
    }

    // validating number of items in stock
    // var p_numStock = /^[0-9]+$/;
    if (!numStock.value.match(objRegex)) {
        numStock.style.border = '1px solid red';
        document.getElementById("stockError").innerHTML = "Number of Items in stock should be a number.";
        // alert('Number of Items in stock should be a number.');
    }
}