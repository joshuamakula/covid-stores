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


    var objRegex = /^[0-9]+$/;
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    // validating Item Name
    if (!itemName.value.match(alpha)) {
        itemName.style.border = '1px solid red';
        document.getElementById("nameError").innerHTML = "Item name should be filled with characters only";

        return false;
    }

    // validating make; 2 CAPITAL LETTERS
    var p_itemMake = /^[A-Z]+$/;
    if (!itemMake.value.match(p_itemMake) || (itemMake.value.length != 2)) {
        itemMake.style.border = '1px solid red';
        document.getElementById("makeError").innerHTML = "Make should be 2 characters all in capital letters";

        return false;
    }

    // validating serial number
    var minLength = 6;
    var maxLength = 22;
    var p_serialNumber = /^[0-9a-zA-Z]+$/;
    if (!serialNumber.value.match(p_serialNumber) || (serialNumber.value.length < minLength) || (serialNumber.value.length > maxLength)) {
        serialNumber.style.border = '1px solid red';
        document.getElementById("serialError").innerHTML = "Serial number should be betwee 6 & 22 alphanumeric characters.";

        return false;
    }

    // validating the price

    if (!price.value.match(objRegex)) {
        price.style.border = '1px solid red';
        document.getElementById("priceError").innerHTML = "Price should be a number";

        return false;
    }

    var char = /^[A-Za-z]+$/;
    // validating color
    if (!itemColor.value.match(char)) {
        itemColor.style.border = '1px solid red';
        document.getElementById("colorError").innerHTML = "Enter correct item";
        return false;
    }

    // Validating product description
    if (itemDesc.value.length == "") {
        itemDesc.style.border = '1px solid red';
        document.getElementById("descError").innerHTML = "Item description required.";

        return false;
    }

    // validating number of items in stock
    var num = /^[0-9]+$/;
    if (!numStock.value.match(num)) {
        numStock.style.border = '1px solid red';
        document.getElementById("stockError").innerHTML = "Number of Items in stock should be a number.";

        return false;
    }

    // Validating item Photo
    if (itemPhoto.value.length == "") {
        itemPhoto.style.border = '1px solid red';
        document.getElementById("photoError").innerHTML = "Add item photo.";

        return false;
    }
}