'use strict';

module.exports = exports = {};

exports.readFile = async (file, callback) => {
  try {
    if (file.match(/bad/i)) {
      callback('Invalid File');
    }
    else {
      callback(undefined, Buffer.from('File Contents'));
    }
  }
  catch (error) {
    { throw error; }
  }

  exports.writeFile = async (data, callback) => {
    if (!data) {
      callback('No data');
    }
    else {
      callback(undefined, JSON.stringify(data));
    }
  };
};