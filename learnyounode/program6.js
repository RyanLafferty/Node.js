/*
Ryan Lafferty
*/

var mod1 = require('./module1.js');

mod1(process.argv[2], process.argv[3], function(err, files)
{
    for(i = 0; i < files.length; i++)
    {
        console.log(files[i]);
    }
});
