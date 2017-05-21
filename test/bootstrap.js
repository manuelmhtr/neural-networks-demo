const path = require('path');
const chai = require('chai');
const testUtils = require('./utils');
const getRootPath = () => path.join(__dirname, '/../');

global.expect = chai.expect;
global.testUtils = testUtils;
global.__root = getRootPath();
