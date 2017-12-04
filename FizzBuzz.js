for (let number = 1; number < 101; number++) {
    let output = '';
    if (number % 3 === 0) {
        output += 'Fizz';
    }
    if (number % 5 === 0) {
        output += 'Buzz';
    }
    if (output === '') {
        console.log(number);
    } else {
        console.log(output);
    }
}