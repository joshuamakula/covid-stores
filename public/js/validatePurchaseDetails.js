function purchaseDetailsValidation() {
    // Declaring variables
    cName = document.purDetails.cName;
    clocation = document.purDetails.clocation;
    phone = document.purDetails.phone;
    email = document.purDetails.email;
    nationalID = document.purDetails.nationalID;
    itemName = document.purDetails.itemName;
    price = document.purDetails.price;
    initialPay = document.purDetails.initialPay;
    serialNumber = document.purDetails.serialNumber;
    payDate = document.purDetails.payDate;
    nextDate = document.purDetails.nextDate;
    refNumber = document.purDetails.refNumber;
    purchaseReceipt = document.purDetails.purchaseReceipt;

    // var randomNum = Math.floor(Math.random() * 10);
    // Math.round(Math.rondom()*1000)

    
    // validating Item Name
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if (!cName.value.match(alpha)) {
        cName.style.border = '1px solid red';
        document.getElementById("cNamei").innerHTML = "Name of the item should characters only";

        return false;
    }

    // validating location
    var p_clocation = /^[A-Za-z]+$/;
    if (!clocation.value.match(p_clocation)) {
        clocation.style.border = '1px solid red';
        document.getElementById("clocationi").innerHTML = "Name of the item should characters only";

        return false;
    }

    // validating customer phone
    var phoneno = /^\d{10}$/;
    if (!phone.value.match(phoneno)) {
        phone.style.border = '1px solid red';
        document.getElementById("phonei").innerHTML = "Invalid Phone number";

        return false;
    }

    // validating email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
        email.style.border = '1px solid red';
        document.getElementById("emaili").innerHTML = "Enter a valid email address";

        return false;
    }

    // validatin Agents National ID
    var carNum = /^[0-9A-Z]+$/;
    if (!nationalID.value.match(carNum)) {
        nationalID.style.border = '1px solid red';
        document.getElementById("clocationi").innerHTML = "Invalid National ID";
        // validating national id length
        if (nationalID.value.length < 13 || nationalID.value.length > 13) {
            nationalID.style.border = '1px solid red';
            document.getElementById("nationalIDi").innerHTML = "National ID should be 13 Alpha-numerals";

            return false;
        }
    }

    // validating Item Name
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if (!itemName.value.match(alpha)) {
        itemName.style.border = '1px solid red';
        document.getElementById("itemNamei").innerHTML = "Enter correct item";

        return false;
    }
    // validating Initial Pay
    var num = /^[0-9]+$/;
    if (!initialPay.value.match(num)) {
        initialPay.style.border = '1px solid red';
        document.getElementById("initialPayi").innerHTML = "Enter correct inital pay";

        return false;
    }
    // Making sure the Initial Pay is atleast 50% of the Cost
    if (initialPay.value < (price.value / 2)) {
        initialPay.style.border = '1px solid red';
        document.getElementById("initialPayi").innerHTML = "Initial pay must be atleast 50% of the Cost Price Above";

        return false;
    }

    // Making sure the Initial Pay is not greater than the Cost Price
    if (initialPay.value > (price.value)) {
        initialPay.style.border = '1px solid red';
        document.getElementById("initialPayi").innerHTML = "Initial pay can not be greater the Cost Price Above";

        return false;
    }

    // validating Iem serial number
    var sNum = /^[0-9A-Z]+$/;
    if (!serialNumber.value.match(sNum)) {
        serialNumber.style.border = '1px solid red';
        document.getElementById("serialNumberi").innerHTML = "Enter correct serial number";

        return false;
    }



    // validating Referee Number
    /* if (!refNumber.value.match(num)) {
        refNumber.style.border = '1px solid red';
        document.getElementById("refNumberi").innerHTML = "Incorrect referee number";

        return false;
    } */

    // validating purchase Receipt
   /*  if (!purchaseReceipt.value.match(num)) {
        purchaseReceipt.style.border = '1px solid red';
        document.getElementById("purchaseReceipti").innerHTML = "Incorrect Purchase Receipt";

        return false;
    } */


}