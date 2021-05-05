function solve(input) {
  let productName = "";
  let sum = 0;
  for (const product of input) {
    const regex = />>(?<product>[A-Za-z]+)<<(?<price>[0-9]+(\.[0-9]+)?)!(?<quanity>[0-9]+)/g;
    if (product === "Purchase") break;
    const result = regex.exec(product);
    if (result !== null) {
      productName += `\n${result.groups.product}`;
      sum += Number(result.groups.price) * Number(result.groups.quanity);
    }
  }
  console.log(`Bought furniture: ${productName}`);
  console.log(`Total money spend: ${sum.toFixed(2)}`);
}