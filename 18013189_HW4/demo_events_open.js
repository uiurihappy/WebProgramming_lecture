var fs = require('fs');

var readStream = fs.createReadStream('./demofile.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
  console.log('18013189 차윤범');
});