function registersalesAgent() {
    // event.preventDefault()
    // declaring sales Agent variables
    
    firstName = document.salesAgent.firstName;
    username = document.salesAgent.username;
    nationalID = document.salesAgent.nationalID;
    employeeID = document.salesAgent.employeeID;
    empPassword = document.salesAgent.empPassword;
    empPasswordAgain = document.salesAgent.empPasswordAgain;

    // validating Agents First Name
    var alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if (!firstName.value.match(alpha)) {
        firstName.style.border = '1px solid red';
        document.getElementById("fname").innerHTML = "First Name of the item should characters only, no numbers";
        
        return false;
    }

    // validating Agents Last Name
    var a_username = /^[A-Za-z]+$/;
    if (!username.value.match(a_username)) {
        username.style.border = '1px solid red';
        document.getElementById("lname").innerHTML = "Last Name of the item should characters only, no numbers";
        
        return false;
    }

    // validatin Agents National ID
    var carNum = /^[0-9A-Z]+$/;
    if (!nationalID.value.match(carNum)) {
        nationalID.style.border = '1px solid red';
        document.getElementById("nID").innerHTML = "Enter valid National ID";
        
        // validating national id length
        if (nationalID.value.length < 13 || nationalID.value.length > 13) {
            nationalID.style.border = '1px solid red';
          return false;
        }
        return false;
    }

    // Validating Passwords
    if (empPassword.value != empPasswordAgain.value) {
        empPassword.style.border = '1px solid red';
        empPasswordAgain.style.border = '1px solid red';
        document.getElementById("pass").innerHTML = "Password Mis-match";
        document.getElementById("passAgain").innerHTML = "Password Mis-match";

        return false;
    }


}

