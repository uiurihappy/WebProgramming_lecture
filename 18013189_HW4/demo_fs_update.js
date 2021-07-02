var fs = require('fs');

//append content at the end of the file:
fs.appendFile('mynewfile1.txt', ' 18013189 차윤범 This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});