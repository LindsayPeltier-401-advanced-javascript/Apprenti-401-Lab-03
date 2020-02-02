'use strict';

jest.mock('fs');

const editFile = require('../edit-file.js');

describe('File reader module', () => {

  it('Returns an error when given a bad file', async () => {
    let file = `${__dirname}/../../data/bad.json`;
    try {
      let data = await editFile.readFile(file);
      expect(data).not.toBeDefined();
    }
    catch (error) { expect(error).toBeDefined(); }
  });

  it('Returns data when given correct file', async () => {
    let file = `${__dirname}/../../data/person.json`;

    try {
      let data = await editFile.readFile(file);
      expect(data).toBeDefined();
    }
    catch (error) { expect(error).not.toBeDefined(); }
  });

});

describe('File writer module', () => {

  it('Successfully received data', async () => {
    let file = `${__dirname}/../../data/person.json`;

    try {
      let data = await editFile.readFile(file);
      expect(editFile.writeFile(data)).toBeTruthy();
    }
    catch (error) { expect(error).toBeFalsy(); }

  });

  it('Did not receive any data', async () => {
    let file = `${__dirname}/../../data/bad.json`;

    try {
      let data = await editFile.readFile(file);
      expect(editFile.writeFile(data)).not.toBeDefined();
    }
    catch (error) { expect(error).toBeDefined(); }
  });
});