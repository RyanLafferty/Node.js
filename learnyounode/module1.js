/*
Ryan Lafferty
*/

var fs = require('fs');
var path = require('path');

module.exports = filter;

function filter(dir, ext, callback)
{
    fs.readdir(dir, function Read(err, files)
    {
        if(err)
        {
            callback(err, null);
        }
        else
        {
            result = [];
            files.forEach(function (file)
            {
                if (path.extname(file) == '.' + ext)
                {
                    result.push(file);
                }
            });

            callback(null, result);
        }
    });
};
