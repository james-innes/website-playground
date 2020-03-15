var express = require('express');
var app = express();
var router = express.Router()

var path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get("/*",function(req, res, next){
    
    console.log(req)
    return res.render(`${req.url}`, { title: 'Home' });
});


// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

// app.route({
//     method: 'GET',
//     path: '/{path*}',
//     handler: function (request, reply) {

//         var path = request.params.path;
//         var match = path.match(/(.+\/)?(.+\.ext)$/);
//         if (match) {
//             var filename = match[2];
//             return reply('Processing file: ' + filename);
//         }

//         reply('Something else');
//     }
// });



app.listen(80, function(){
    console.log('Listening on port 80');
});