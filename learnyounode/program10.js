var net = require('net')
var port = process.argv[2];

var server = net.createServer(function (socket)
{
   // socket handling logic
   //console.log("connection established");
   var current_time = new Date();
   var year = current_time.getFullYear();
   var month = current_time.getMonth() + 1;
   var day = current_time.getDate();
   var hours = current_time.getHours();
   var minutes = current_time.getMinutes();

   if(month < 10)
   {
       month = "0" + month;
   }
   if(day < 10)
   {
       day = "0" + day;
   }
   if(hours < 10)
   {
       hours = "0" + hours;
   }
   if(minutes < 10)
   {
       minutes = "0" + minutes;
   }

   var date_str = "" + year + "-" + month + "-" + day + " " + hours + ":" + minutes + "\n";
   console.log(date_str);
   socket.end(date_str);
});
server.listen(port);
