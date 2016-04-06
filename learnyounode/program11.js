var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var fileLocation = process.argv[3];

var server = http.createServer(function(req, res)
{
    //open read stream
    var fileStream = fs.createReadStream(fileLocation);
    //pipe to response
    fileStream.pipe(res);
});
server.listen(port);
