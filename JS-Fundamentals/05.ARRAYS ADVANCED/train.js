function train(arr) {
    let firstElem = arr
        .shift()
        .split(" ")
        .map(Number); // [32, 54, 21, 12, 4, 0, 23]

    const secondElem = Number(arr.shift()); // 75
        
    for (let elem of arr) {
        let [firstCommand, secondCommand] = elem.split(" ");

        if (firstCommand === "Add") {
            firstElem.push(secondCommand);
        } else {
            for (let i = 0; i < firstElem.length; i++) {
                if (!(Number(firstCommand) + firstElem[i] > secondElem)) {
                    firstElem[i] += Number(firstCommand);
                    break;
                }
            }
        }
    }

    return firstElem.join(" ");
}