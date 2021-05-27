var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/',function(req,res){
    res.render("main");
});

app.get('/about',function(req,res){
    res.render("about");
});

app.get('/login',function(res,req){
    res.render('login')
})

app.get('/reg',function(res,req){
    res.render('reg')
})

app.get('/shop',function(req,res){
    res.render("shop");
})


app.get('/news/:id',function(req,res){
    var obj = {title: "новость", id: 4, paragraphs: ['параграф', 'обычный текст', 'Числа: 1, 2, 4', 99]}
    res.render('news', {newsId: req.params.id, obj: obj});
});

app.get('/main',function(req,res){
    res.render("main");
});

app.get('/:else',function(req,res){
    res.render("er404");
});






app.listen(3000);