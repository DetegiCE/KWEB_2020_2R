const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

//await는 비동기 함수 내에서만 사용 가능
const printFileSize = async filename => {
    try {
        const data = await readFile(filename);
        console.log(`Data length: ${data.length}`);
    } catch(err) {
        console.error(err);
    }
};

console.log('foo');
printFileSize('./week2/bigfile.bin');
console.log('bar');