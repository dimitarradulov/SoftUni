function solve(arr, num) {
    for (let i = 1; i <= num; i++) {
        arr.push(arr.shift());
    }
    console.log(arr.join(" "));  
}