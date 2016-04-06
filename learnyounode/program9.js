/*
Ryan Lafferty
*/

var http = require('http');

var urls = process.argv.slice(2);
var responses = [];

for (i = 0; i < urls.length; i++)
{
    responses[i] = null;
}

for(i = 0; i < urls.length; i++)
{
    getRes(i);
}

function getRes(i)
{
    var response = "";
    var results = 0;
    
    http.get(urls[i], function(request)
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
            responses[i] = response;
            response = "";

            results = 0;
            for(j = 0; j < responses.length; j++)
            {
                if(responses[j] != null)
                {
                    results++;
                }
            }

            if(results >= responses.length)
            {
                for(j = 0; j < responses.length; j++)
                {
                    console.log(responses[j]);
                }
            }
        });
    });
}
