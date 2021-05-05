function solve(arr1, arr2) {
    let mergedArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            mergedArr.push(Number(arr1[i]) + Number(arr2[i])); 
        } else {
            mergedArr.push(arr1[i] + arr2[i]);
        }
    }

    console.log(mergedArr.join(" - "));
}