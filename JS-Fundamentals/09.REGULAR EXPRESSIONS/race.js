function solve(input) {
  let finalRacers = {};
  const racersNames = input
    .shift()
    .split(", ")
    .forEach((name) => {
      finalRacers[name] = 0;
    });

  for (let i = 0; i < input.length; i++) {
    let elem = input[i];
    if (input[i] === "end of race") break;
    const regexDeleteSymbols = /[^A-Za-z0-9]+/g;
    input[i] = input[i].replace(regexDeleteSymbols, "");
    const name = input[i].replace(/[0-9]+/g, "");
    if (finalRacers.hasOwnProperty(name)) {
      const digits = input[i].replace(/[A-Za-z]+/g, "");
      let sum = 0;
      for (const char of digits) {
        sum += Number(char);
      }
      finalRacers[name] += sum;
    }
  }

  const finalRacersEntries = Object.entries(finalRacers).sort(
    (a, b) => b[1] - a[1]
  );
  const racersTop3 = finalRacersEntries.slice(0, 3);
  for (let i = 0; i < racersTop3.length; i++) {
    let place = i + 1;
    switch (place) {
      case 1:
        console.log(`${i + 1}st place: ${racersTop3[i][0]}`);
        break;
      case 2:
        console.log(`${i + 1}nd place: ${racersTop3[i][0]}`);
        break;
      case 3:
        console.log(`${i + 1}rd place: ${racersTop3[i][0]}`);
        break;
    }
  }
}