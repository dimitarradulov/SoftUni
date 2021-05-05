function solve(input) {
    input = input.split("\\");
    let finalPath = input.pop().split('.');
    let extension = finalPath.pop();
    console.log(`File name: ${finalPath.join('.')}`);
    console.log(`File extension: ${extension}`);
}