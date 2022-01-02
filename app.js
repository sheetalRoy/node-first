var express = require('express');
var todoController = require('./controllers/todoController');
var app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
todoController(app);
app.set('view engine', 'ejs');

app.use('/assets', express.static('./public'))
// app.get('/', (req, res) => {
//     // res.sendFile(__dirname + '/index.html');
//     res.send("Helllllllloooooooooo");
// });
// app.post('/quotes', (req, res) => {
//     console.log(req.body)
//   });
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/node', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000
},(err,result)=>{
if(err)
console.log(err,"connnection issue")
else
console.log("database connected")
});
// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});
app.listen(3000);

// app.get('/', function(req, res) {
//     res.send('Hello World')
//   })
