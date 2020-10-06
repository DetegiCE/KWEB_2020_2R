const fs = require('fs');

console.log('foo');

fs.readFile('./week2/bigfile.bin', (err, data) => {
    if(err) console.log(`Data length: ${data.length} bytes`);
    else console.error(err);
});

console.log('bar');