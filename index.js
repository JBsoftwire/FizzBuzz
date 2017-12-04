const readline = require('readline-sync');
console.log('Calculator On');
console.log('Enter an operator (+, -, * or /):')
const operator1 = readline.prompt();
console.log('Enter an integer:');
const number1 = parseInt(readline.prompt());
console.log('Enter another integer:');
const number2 = parseInt(readline.prompt());
if (operator1 == '+') { //this whole section could also be done with a switch
    console.log(number1+number2);
} else if (operator1 == '*') {
    console.log(number1*number2);
} else if (operator1 == '-') {
    console.log(number1-number2);
} else if (operator1 == '/') {
    console.log(number1/number2);
} else {
    console.log('ERROR: invalid operator')
}

// comment

/*
also a comment
 */
