var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/',function(req,res){
    res.render("index");
});

app.get('/about',function(req,res){
    res.render("about");
});

app.get('/news/:id',function(req,res){
    var obj = {title: "новость", id: 4, paragraphs: ['параграф', 'обычный текст', 'Числа: 1, 2, 4', 99]}
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.get('/index',function(req,res){
    res.render("index");
});

app.get('/:else',function(req,res){
    res.sendFile(__dirname+"/er404.html");
});


app.listen(3000);