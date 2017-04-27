var fs = require("fs");
var gres;

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

//pass res via returning a callback function with a bound
//parameter
function getDataCallback(res)
{
    return function(err, data)
    {
        data = JSON.parse( data );
        data["user4"] = user["user4"];

        console.log(user["user4"]);
        console.log("=======================");
        console.log( data );
        console.log("=======================");

        res.end( JSON.stringify(data));
    }.bind(res);
}

//pass res via global variable
//not async compat
function dataCallback(err, data)
{
    var res = gres;
    console.log(res);
    data = JSON.parse( data );
    data["user4"] = user["user4"];

    console.log(user["user4"]);
    console.log("=======================");
    console.log( data );
    console.log("=======================");

    res.end( JSON.stringify(data));
}

function readCallback(err, data)
{
    console.log( data );
    res.end( data );
}

module.exports = 
{
    post: function (req, res) 
    {
        //figure out how to bind this to a callback 
        //to improve memory footprint
        var dc = getDataCallback(res);
        gres = res;
        // First read existing users.
        //console.log(res);
        //fs.readFile( __dirname + "/" + "users.json", 'utf8', dataCallback);
        //res = gres;
        fs.readFile( __dirname + "/" + "users.json", 'utf8', dc);
    },

    get: function (req, res) 
    {
        fs.readFile( __dirname + "/" + "users.json", 'utf8', readCallback);
    }
};