function solve(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let numbers = "";
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        numbers += i + " ";
        sum += i;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}