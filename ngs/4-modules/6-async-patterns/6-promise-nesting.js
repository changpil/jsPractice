const fs = require('fs').promises;

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename + '.copy', data);
  console.log("done");
}

main();
console.log('TEST');
