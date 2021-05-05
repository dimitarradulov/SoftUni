function solve(arr) {
    let sumOriginalArr = 0;
    let sumModifiedArr = 0;

    for (let i = 0; i < arr.length; i++) {
        sumOriginalArr += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumModifiedArr += arr[i];
    }

    console.log(arr);
    console.log(sumOriginalArr);
    console.log(sumModifiedArr);
}