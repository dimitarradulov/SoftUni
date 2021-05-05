function solve(input) {
  let sum = 0;
  for (const line of input) {
    if (line === "end of shift") break;
    const regex = /%(?<name>[A-Z][a-z]+)%([^|$%.0-9]+)?<(?<product>\w+)>([^|$%.0-9]+)?\|(?<count>\d+)\|([^|$%.0-9]+)?(?<price>[0-9]+(\.[0-9]+)?)([^|$%.0-9]+)?\$/g;
    const match = regex.exec(line);
    if (match) {
      const price = Number(match.groups.count) * Number(match.groups.price);
      console.log(
        `${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`
      );
      sum += price;
    }
  }
  console.log(`Total income: ${sum.toFixed(2)}`);
}