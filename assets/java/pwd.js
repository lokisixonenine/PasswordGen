/* set up variables
- letters: made up of 26 lower case and 26 upper case letters
- numbers: made up of numerals 0 through 9 
- symbols: ~!@#$%^&**()-_=+[]{};':>?./,<`
*/

var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var sym = "~!@#$%^&**()-_=+[]{};':>?./,<`";

// assigning variables
var clipboard = document.getElementById("clipboard");
var yourPw = document.getElementById("yourPw");

//added eventlistener to react when generate button is clicked
generate.addEventListener("click", function(e){
    var password = yourPw;   
)
}

/* this line below writes the password to the browser window but page must be loaded/
reloaded manually. */
// document.write(password(12, char + num + sym));

// this is the function to randomize and add all of the variables together
function password(l, characters){
    var pwd ='';

    for(var i = 0; i<l; i++){
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return pwd;
    
}
