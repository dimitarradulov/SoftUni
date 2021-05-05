function solve(input) {
  const firstHalfEndIndex = input.length / 2;
  const firstHalf = input.substring(0, firstHalfEndIndex);
  const secondHalf = input.substring(firstHalfEndIndex, input.length);
  console.log(firstHalf.split("").reverse().join(""));
  console.log(secondHalf.split("").reverse().join(""));
}