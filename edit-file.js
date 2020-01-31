'use strict';

const fs = require('fs');
const validator = require('./lib/validatorClass');

const read = (file, callback) => {
  fs.readFile(file, (error, data) => {
    if (error) {
      callback(error);
    } else {
      callback(undefined, JSON.parse(data.toString()));
    }
  });
};

const save = (data, fileName, rules, callback) => {
  if (validator.isValid(rules, data)) {
    const buffer = Buffer.from(JSON.stringify(data));

    fs.writeFile(fileName, buffer, error => {
      if (error) {
        callback(error);
      } else {
        callback(undefined);
      }
    });
  } else { console.log('Is Valid'); }
};

module.exports = { read, save };