var http = require('http');
var fs = require('fs');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function(req, res)
{
    var parsedUrl = "";

    if(req.method == 'GET')
    {
        var date = null;
        parsedUrl = url.parse(req.url, true);
        date = new Date(parsedUrl.query.iso);

        if(parsedUrl.pathname == "/api/parsetime")
        {
            var jsDate = JSON.stringify(
            {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            });
            res.end(jsDate)
        }
        else if(parsedUrl.pathname == "/api/unixtime")
        {
            var jsDate = JSON.stringify(
            {
                unixtime: date.getTime()
            });
            res.end(jsDate);
        }
    }
});
server.listen(port);
