var express=require('express');

var path=require('path');
var favicon=require('serve-favicon');

var app=express();

app.use(require('body-parser')());

app.set("port",process.env.PORT||3006); //端口号


app.use(express.static(__dirname +'/public'));

app.get('/',function(req,res){
    res.type('html/text');
        res.send() ;
        res.end();

});
app.use(function (req,res) {
    res.type('text/html');
    res.status(404);
    res.send("<span> 404</span>")

});
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send('500');


});
app.listen(app.get('port'),function(){
    console.log('express started on http://localhost:'+app.get('port')+ ';' +
        'press ctrl-c to terminate.');
});