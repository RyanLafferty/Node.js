/*
Ryan Lafferty
*/

var http = require('http');
var response = "";

http.get(process.argv[2], function(request)
{
    request.setEncoding('utf8');

    request.on('error', function (e)
    {
        console.log("Error message: " + e.message);
    });

    request.on('data', function (data)
    {
        response += data;
    });

    request.on('end', function()
    {
        console.log(response.length);
        console.log(response);
        response = "";
    });
});
