/*
Ryan Lafferty
*/

var http = require('http');

http.get(process.argv[2], function(response)
{
    response.setEncoding('utf8');

    response.on('error', function (e)
    {
        console.log("Error message: " + e.message);
    });

    response.on('data', function (data)
    {
        console.log(data);
    });
});
