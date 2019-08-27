let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let showView = __dirname + "/views/";
let db = [];

app.use(bodyParser.urlencoded({
    extended: false
}))

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use(bodyParser.json())

app.use(express.static('images'));
app.use(express.static('css'));

app.get('/', function(req, res){
    res.sendFile(showView +'index.html');
})

app.get('/newtask', function(req, res){
    res.sendFile(showView + 'newtask.html');
})

app.post('/data', function(req, res){
    console.log(req.body.username);
    console.log(req.body.taskdue);
    console.log(req.body.taskdescrip);
    db.push(req.body);   
})

app.post('/newtask', function(req, res){
    res.sendFile(showView + "index.html");
})

app.get('/listtasks', function(req, res){
    res.render('listtasks.html',{
       listDb:db
    });
})

app.listen(8080);
