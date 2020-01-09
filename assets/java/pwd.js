/* set up variables
- letters: made up of 26 lower case and 26 upper case letters
- numbers: made up of numerals 0 through 9 
- symbols: ~!@#$%^&**()-_=+[]{};':>?./,<`
*/

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "~!@#$%^&**()-_=+[]{};':>?./,<`";

// assigning variables:
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var submit = document.getElementById("submit");
var clipboard = document.getElementById("clipboard");
var yourPw = document.getElementById("yourPw");

console.log(password(12, char));
// function to randomize and add all of the variables together
function password(l, characters){
    var pwd ='';

    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;
}

