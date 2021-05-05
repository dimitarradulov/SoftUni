function loadingBar(num) { 
    if (num === 100) {
        console.log("100% Complete!");
        return `[${bar(num)}]`
    } else {
        console.log(`${num}% [${bar(num)}]`);
        return "Still loading...";
    }

    function bar(n) {
        const percentageNum = n / 10; 
        let loadingBars = [".",".",".",".",".",".",".",".",".","."];
        loadingBars.splice(0, percentageNum);
        for (let i = 1; i <= percentageNum; i++) {
            loadingBars.unshift("%");
        }
        return loadingBars.join("");
    }
}