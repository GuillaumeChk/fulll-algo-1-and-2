const N = 100; // <-- set N here

for (let i = 1; i <= N; i++) {
    if (i%3 === 0 && i%5 === 0) // divisible by 3 and 5
        console.log('FizzBuzz ');
    else if (i%3 === 0) // divisible by 3
        console.log('Fizz ');
    else if (i%5 === 0) // divisible by 5
        console.log('Buzz ');
    else    // not divisible by 3 neither by 5
        console.log(i + ' ');
};