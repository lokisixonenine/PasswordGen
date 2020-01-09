/* set up variables
- letters: made up of 26 lower case and 26 upper case letters
- numbers: made up of numerals 0 through 9 
- symbols: ~!@#$%^&**()-_=+[]{};':>?./,<`
*/

var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeral = "0123456789";
var symbols = "~!@#$%^&**()-_=+[]{};':>?./,<`";

// assigning variables:
var lettersbox = document.getElementById("letters");
var numeralbox = document.getElementById("numeral");
var symbolsbox = document.getElementById("symbols");
var generate = document.getElementById("generate");
var clipboard = document.getElementById("clipboard");
var password = document.getElementById("password");
