function division(num) {
    if (Number.isInteger(num / 10)) {
        console.log(`The number is divisible by 10`);
    } else if (Number.isInteger(num / 7)) {
        console.log(`The number is divisible by 7`);
    } else if (Number.isInteger(num / 6)) {
        console.log(`The number is divisible by 6`);
    } else if (Number.isInteger(num / 3)) {
        console.log(`The number is divisible by 3`);
    } else if (Number.isInteger(num / 2)) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log(`Not divisible`);
    }
}