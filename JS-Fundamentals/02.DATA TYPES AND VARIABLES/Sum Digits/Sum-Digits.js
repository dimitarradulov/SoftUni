function solve(num) {
    num = Number(num);
    let sum = 0;
    while (num) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    console.log(sum);
}