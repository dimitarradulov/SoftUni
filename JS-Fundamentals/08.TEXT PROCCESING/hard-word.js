unction solve(input) {
  let words = input.pop();
  input = input.join("").split(" ");

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("_")) {
      let elemLength = input[i].length;
      let currElem = input[i];
      if (currElem[elemLength - 1] !== "_") {
        const sign = currElem.slice(elemLength - 1);
        elemLength = input[i].length - 1;
        for (const word of words) {
          if (elemLength === word.length) {
            input[i] = word + sign;
            words.splice(words.indexOf(word), 1);
            break;
          }
        }
      }

      for (const word of words) {
        if (elemLength === word.length) {
          input[i] = word;
          words.splice(words.indexOf(word), 1);
          break;
        }
      }
    }
  }

  console.log(input.join(" "));