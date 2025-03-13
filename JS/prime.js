const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);
    
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (!isNaN(number)) {
        console.log(`${number} is ${isPrime(number) ? 'a prime' : 'not a prime'} number.`);
    } else {
        console.log("Please enter a valid number.");
    }

    rl.close();
});
