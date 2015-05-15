/*
Ryan Lafferty
*/

var limit = (process.argv.length - 2);
var i = 0;
var sum = 0;

for(i = 0; i < limit; i++)
{
  sum += Number(process.argv[i+2]);
}

console.log(sum);
