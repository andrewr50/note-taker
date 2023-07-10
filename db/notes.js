const util = require('util');
const fs = require('fs');

// create unique id for stored data
const uuidv1 = require('uuid/v1');

// allows read and write file to fulfill promises
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
