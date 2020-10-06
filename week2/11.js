const path = require('path');

const myFile = '/Users/rbk/Downloads/numcard1.jpg';
const dirname = path.dirname(myFile);
const basename = path.basename(myFile);
const extname = path.extname(myFile);

console.log(`path.dirname = ${dirname}`);
console.log(`path.basename = ${basename}`);
console.log(`path.extname = ${extname}`);