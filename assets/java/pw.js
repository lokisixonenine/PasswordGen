//random password generator using upper/lower case characters, numbers, and symbols
function random_password_generate(max, min) {
    //this set password length and strength
    let pwStrength = document.getElementById("pword").value -1;

    //define possible values for upper case, lower case, numbers, and sybmols 
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
    let password = "";

    //choose letters, symbols, numbers to be used in random password
    for (var i = 0; i <= pwStrength; i++) {
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
    }
    //outputs random password to textbox area
    document.getElementById("display").value = password;
}

function copyPassword() {

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}