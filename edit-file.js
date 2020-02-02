'use strict';

// Dependency 
const fs = require('fs');

const validator = require('./validator/validator');
const readFile = require('./lib/read-file');
const schema = require('./lib/schema');

let argv = process.argv;
let file = `${__dirname}/files/data/${argv[2]}`;

/**
 * @function - Error Handling Function
 * @param {object} error
 */
function handleError(error) {
  throw error;
}

/**
 * @function - Modifies data from the .json file and writes to back to JSON
 * @returns {object}
 */
async function writeFile() {

  try {
    let data = await readFile(file);
    let dataObject = await JSON.parse(data);

    dataObject.firstName = 'Lindsay';
    dataObject.lastName = 'Peltier';
    dataObject.hair = {
      type: 'short',
      color: 'blonde',
    };
    dataObject.kids = Math.floor(Math.random() * 11);

    /**
     *@function - Tests to see if changed object is valid against the schema
     *@param {object} schema
     *@param {object} dataObject
     *@return {boolean}
     */
    await validator.isValid(schema, dataObject);

    fs.writeFile(file, JSON.stringify(dataObject, null), async (error) => {
      console.log(error || dataObject);
    });

  }
  catch (error) {
    handleError(error);
  }
}

writeFile();

module.exports = { readFile, writeFile };