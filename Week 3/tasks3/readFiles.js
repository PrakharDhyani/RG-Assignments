const fs = require('fs').promises;
const path = require('path');

async function displayTransactions() {
  try {
    // TODO: Read 'transactions.json' file using fs.readFile or fs.readFile with async/await
    const file = await fs.readFile("./data/transactions.json","utf-8")
    console.log(file)
   
  } catch (error) {
    // TODO: Handle errors that occur during file reading or JSON parsing
    console.log(error)
  }
}

displayTransactions();
