function solve(arg1, arg2) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);

    if (arg2 > 15) {
        arg2 = 15;
    }

    const result = arg1.toFixed(arg2);
    console.log(parseFloat(result));
}