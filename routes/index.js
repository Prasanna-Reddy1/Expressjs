var express = require('express');
const { get } = require('http');
var router = express.Router();
var path = require('path');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//  // res.render('index', { title: 'Express' });
// // res.send("<h1 style ='color : blue;'>Hello ! this express developed by prasanna</h1>");
// res.sendFile(path.resolve("public/forms.htm"));
// });
// router.post('/formsubmit', function(req, res, next) {
//    var output = '<table border= 1>'
//    for (var _ in req.body){ 
//     output += '<tr><td>'+_+'<td>'
//     output+= req.body[_]+ '</td></tr>'
//    }
//    output += '</table>'
//    res.send(output);
//    });    
   router.get('/', function(req, res, ) {
      // res.render('index', { title: 'Express' });
     // res.send("<h1 style ='color : blue;'>Hello ! this express developed by prasanna</h1>");
     res.render('index', { title:'Express'
});
router.get('/fbposts', function(req, res, ) {
   // res.render('index', { title: 'Express' });
  // res.send("<h1 style ='color : blue;'>Hello ! this express developed by prasanna</h1>");
  var posts = [
   { title :  "wishes", message:"happy birthday"}
  ]
  
});
router.get('/fbposts', function(req, res, ) {
   // res.render('index', { title: 'Express' });
  // res.send("<h1 style ='color : blue;'>Hello ! this express developed by prasanna</h1>");
  var mysql=require('../database/db')

mysql.getConnection((err, connection) => {

if(err) throw err;

connection.query('SELECT Query', (err, rows)=> {

connection.release();

if(err) throw err;

//res.render('index', {rows:rows});

res.send(rows);

});

});
});
     });
module.exports = router;
