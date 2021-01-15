const express=require('express');
const path=require('path');
const app=express();
app.use(express.static('Public'));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');
app.get('/',(req,res)=>{
    res.render('index',{
        btnone:'1',
        btntwo:'2',
        btnthree:'3'
    });
});
app.listen(3000);