function employees(arr) {
    for (const line of arr) {
        const employeeInfo = {
            name: line,
            personalNum: line.length
        };
        console.log(`Name: ${employeeInfo.name} -- Personal Number: ${employeeInfo.personalNum}`);
    }
}