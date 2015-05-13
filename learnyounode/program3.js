var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]).toString();

var arr = buf.split('\n');

var lines = arr.length - 1;

console.log(lines);
