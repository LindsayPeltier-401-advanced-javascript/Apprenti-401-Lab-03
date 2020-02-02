'use strict';

const schema = {
  firstName: { type: 'string', required: true },
  lastName: { type: 'string', required: true },
  hair: { type: 'object', required: true },
  favoriteFoods: { type: 'array', required: true },
  married: { type: 'boolean' },
  kids: { type: 'number', valueType: 'number' },
};

module.exports = schema;