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

function dataCallback(err, data)
{
    var res = gres;
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
        // First read existing users.
        //console.log(res);
        gres = res;
        fs.readFile( __dirname + "/" + "users.json", 'utf8', dataCallback);
        res = gres;
    },

    get: function (req, res) 
    {
        fs.readFile( __dirname + "/" + "users.json", 'utf8', readCallback);
    }
};