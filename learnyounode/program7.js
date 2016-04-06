/*
Ryan Lafferty
*/

var http = require('http');

http.get(process.argv[2], function(response)
{
//    console.log("Response code: " + response.statusCode);
    //console.log(response.data);
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
