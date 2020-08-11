function loginValidate() {
    username = document.loginForm.password
    password = document.loginForm.password

    if (username === "") {
        username.style.border = '1px solid red';
        document.getElementById("usernameerr").innerHTML = "Enter Your UserName";

        return false
    }

    if (password === "") {
        password.style.border = '1px solid red';
        document.getElementById("passworderr").innerHTML = "Password is required";
        return false
    }
}