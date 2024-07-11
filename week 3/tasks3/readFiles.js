const fs = require('fs').promises;
const path = require('path');

async function displayTransactions() {
  try {
    // TODO: Read 'transactions.json' file using fs.readFile or fs.readFile with async/await
    const filePath = path.join("data", 'transactions.json');
    // console.log(filePath)
    const fileData = await fs.readFile(filePath,"utf-8");
    console.log(fileData)
   
  } catch (error) {
    // TODO: Handle errors that occur during file reading or JSON parsing
    console.log(error)
  }
}

displayTransactions();
