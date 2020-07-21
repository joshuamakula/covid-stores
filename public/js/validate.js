document.getElementById("addItem").addEventListener("submit", e => {
    e.preventDefault();
    
    validateAddItem();
})
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

function registersalesAgent() {

    // declaring sales Agent variables
    firstName = document.salesAgent.firstName;
    lastName = document.salesAgent.lastName;
    nationalID = document.salesAgent.nationalID;
    employeeID = document.salesAgent.employeeID;
    empPassword = document.salesAgent.empPassword;
    empPasswordAgain = document.salesAgent.empPasswordAgain;

    // validating Agents First Name
    var a_firstName = /^[A-Za-z]+$/;
    if (!firstName.value.match(a_firstName)) {
        firstName.style.border = '1px solid red';
        alert('First Name of the item should characters only, no numbers');
    }

    // validating Agents Last Name
    var a_lastName = /^[A-Za-z]+$/;
    if (!lastName.value.match(a_lastName)) {
        lastName.style.border = '1px solid red';
        alert('Last Name of the item should characters only, no numbers');
    }

    // validatin Agents National ID
    var carNum = /^[0-9A-Z]+$/;
    if (!nationalID.value.match(carNum)) {
        nationalID.style.border = '1px solid red';
        alert('Enter valid National ID');
        // validating national id length
        if (nationalID.value.length < 13 || nationalID.value.length > 13) {
            nationalID.style.border = '1px solid red';
            alert('Enter valid National ID');
        }
    }

    // Validating Passwords
    if (empPassword.value != empPasswordAgain.value) {
        empPassword.style.border = '1px solid red';
        empPasswordAgain.style.border = '1px solid red';
        alert('Password Mis-match');
    }


}

function purchaseDetails() {
    // Declaring variables
    cName = document.purDetails.cName;
    clocation = document.purDetails.clocation;
    phone = document.purDetails.phone;
    email = document.purDetails.email;
    nationalID = document.purDetails.nationalID;
    itemName = document.purDetails.itemName;
    initialPay = document.purDetails.initialPay;
    serialNumber = document.purDetails.serialNumber;
    payDate = document.purDetails.payDate;
    nextDate = document.purDetails.nextDate;
    refNumber = document.purDetails.refNumber;
    purchaseReceipt = document.purDetails.purchaseReceipt;

    // validating Item Name
    var p_itemName = /^[A-Za-z]+$/;
    if (!itemName.value.match(p_itemName)) {
        itemName.style.border = '1px solid red';
        alert('Name of the item should characters only, no numbers');
    }

    // validating location
    var p_clocation = /^[A-Za-z]+$/;
    if (!clocation.value.match(p_clocation)) {
        clocation.style.border = '1px solid red';
        alert('Enter Customer location');
    }

    // validating customer phone
    var phoneno = /^\d{10}$/;
    if (!phone.value.match(phoneno)) {
        phone.style.border = '1px solid red';
        alert('Incorrect Phone number format');
    }

    // validatin Agents National ID
    var carNum = /^[0-9A-Z]+$/;
    if (!nationalID.value.match(carNum)) {
        nationalID.style.border = '1px solid red';
        alert('Enter valid National ID');
        // validating national id length
        if (nationalID.value.length < 13 || nationalID.value.length > 13) {
            nationalID.style.border = '1px solid red';
            alert('National ID should be 13 Alpha-numerals');
        }
    }

    // validating Initial Pay
    if (!initialPay.value.match(decimal)) {
        initialPay.style.border = '1px solid red';
        alert('Initial Payment should end with .00');
    }

    // validating Item Name
    var p_itemName = /^[A-Za-z]+$/;
    if (!itemName.value.match(p_itemName)) {
        itemName.style.border = '1px solid red';
        alert('Name of the item should characters only, no numbers');
    }

    var num = /^[0-9]+$/;

    // validating Referee Number
    if (!refNumber.value.match(num)) {
        refNumber.style.border = '1px solid red';
        alert('Enter correct Referee Number');
    }

    // validating purchase Receipt
    if (!purchaseReceipt.value.match(num)) {
        purchaseReceipt.style.border = '1px solid red';
        alert('Incorrect Purchase Receipt');
    }

    // validating email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
        email.style.border = '1px solid red';
        alert('Enter a valid email address');
    }
}