function solve(n) {
    if (Number.isInteger(n / 4) && !Number.isInteger(n / 100)) {
        console.log("yes");
    } else if (Number.isInteger(n / 400)) {
        console.log("yes");
    } else {
        console.log("no");
    }
}