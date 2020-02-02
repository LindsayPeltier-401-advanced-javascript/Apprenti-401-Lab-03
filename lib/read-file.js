'use strict';

const fs = require('fs');
const util = require('util');

let readFilePromise = util.promisify(fs.readFile);

/**
 * @function - Error Handling Function
 * @param {object} error 
 */
function handleError(error) {
  throw error;
}

/**
 * @function - Async function that brings in data from person.json
 * @param {*} file 
 */
async function readFile(file) {
  try {
    let data = await readFilePromise(file);
    let dataObject = await data.toString();
    return dataObject;
  }
  catch (error) {
    handleError(error);
  }
}

module.exports = readFile;