function sort(arr) {
    let sortedArr = [];
    while (arr.length !== 0) {
        sortedArr.push(Math.max(...arr));
        arr.splice(arr.indexOf(Math.max(...arr)), 1);
        sortedArr.push(Math.min(...arr));
        arr.splice(arr.indexOf(Math.min(...arr)), 1);
    }
    console.log(sortedArr.join(" "));
}