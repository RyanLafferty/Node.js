var http = require('http');

http.get(process.argv[2], function(response)
{
    console.log("Response code: " + response.statusCode);

})
.on('error', function (e)
{
    console.log("Error message: " + e.message);
});
