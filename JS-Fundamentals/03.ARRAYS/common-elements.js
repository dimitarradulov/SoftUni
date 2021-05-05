function solve(array1, array2) {
    const filteredArray = array1.filter(value => array2.includes(value));
    for (let i = 0; i < filteredArray.length; i++) {
        console.log(filteredArray[i]);
    }
}