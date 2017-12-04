for (let number = 1; number < 106; number++) {
    let output = '';
    if (number % 3 === 0) {
        output += 'Fizz';
    }
    if (number % 13 === 0) {
        output += 'Fezz'
    }
    if (number % 5 === 0) {
        output += 'Buzz';
    }
    if (number % 7 === 0) {
        output += 'Bang';
    }

    if (number % 11 === 0) {
        output = 'Bong'
    }
    if (output === '') {
        console.log(number);
    } else {
        console.log(output);
    }
}