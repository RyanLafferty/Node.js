/*
Ryan Lafferty
*/

var fs = require('fs');

var content;

content = fs.readFile(process.argv[2], 'utf8', function read(err, data)
{
    if(err)
    {
        throw err;
    }

    content = data.toString();
    content = content.split('\n');

    console.log((content.length - 1));
});
