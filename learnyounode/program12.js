var http = require('http');
var fs = require('fs');
var map = require('through2-map');
var port = process.argv[2];

var server = http.createServer(function(req, res)
{
    req.pipe(map(function (chunk) {
        chunk = chunk.toString().split('').join('').toUpperCase();
        return chunk;
   })).pipe(res)
});
server.listen(port);
