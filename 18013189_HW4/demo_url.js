var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);
console.log("18013189 차윤범");

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);