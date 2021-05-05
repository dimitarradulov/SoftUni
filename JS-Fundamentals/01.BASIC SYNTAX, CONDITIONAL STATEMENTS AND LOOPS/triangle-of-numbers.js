function solve(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        let col = "";
        for (let j = 1; j <= i; j++) {
            col += i + " ";
        }
        console.log(col);
    }
}