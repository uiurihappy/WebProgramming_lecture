var fs = require('fs');

//Replace the file with a new one:
fs.writeFile('mynewfile3.txt', '18013189 차윤범 This is my text.', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
