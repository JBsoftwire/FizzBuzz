for (let number = 1; number < 105*17+1; number++) {
    let output = '';
    if (number % 3 === 0) {
        output += 'Fizz'; //adds 'Fizz' to the output if number is a multiple of 3
    }
    if (number % 13 === 0) {
        output += 'Fezz'; /*adds 'Fezz' to the output if number is a multiple of 13. this occurs before any B* additions
                            but after the Fizz addition, to ensure correct ordering */
    }
    if (number % 5 === 0) {
        output += 'Buzz'; //adds 'Buzz' to the output if number is a multiple of 5
    }
    if (number % 7 === 0) {
        output += 'Bang'; //adds 'Bang' to the output if number is a multiple of 7
    }
    if (number % 17 === 0) {
        let newoutput = '';
        for (let chunk = parseInt(output.length/4); chunk > 0; chunk--) {
            newoutput += output.substr((chunk-1)*4, 4);/*constructs a new output string by appending 4-character chunks
                                                         from the end of the current output string to a blank string.
                                                         this reverses the order of those chunks in the string*/
        }
        output = newoutput
    }
    if (number % 11 === 0) {
        output = 'Bong' //replaces output with 'Bong' if number is a multiple of 11
    }
    if (output === '') {
        console.log(number);
    } else {
        console.log(output);
    }
}