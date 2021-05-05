function addThenSubtract(a, b, c) {
    function sum() {
        return a + b;
    }

    function subtract() {
        return sum() - c;
    }

    console.log(subtract());
}