var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function callback(err, list)
{
    for(var i = 0; i < list.length; i++)
    {
        var temp = list[i].split('.');
        if(temp[1] == process.argv[3])
        {
            console.log(list[i]);
        }
    }
});


//solution 2 => uses path
fs.readdir(process.argv[2], function (err, list)
{
      list.forEach(function (file)
      {
          if (path.extname(file) == '.' + process.argv[3])
          {
              console.log(file);
          }
      });
});
