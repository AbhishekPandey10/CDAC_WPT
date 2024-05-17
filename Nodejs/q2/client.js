const { factorial, printable, myprime} = require('./mymodule');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Type a number ', (x) => {
    if (x <= 5)
        console.log(`factorial of ${x} is : ${factorial(x)}`);
    else if (x > 5 && x < 10)
        console.log(`the tableof ${x} is : ${printable(x)}`);
    else
        console.log(`is it prime : ${myprime(x)}`);
    readline.close();
});