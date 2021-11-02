const express=require('express');
var userdata=require('../Dialiwishes/src/model/userdata')
// const nodemailer = require("nodemailer");
var nodemailer = require("nodemailer");

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = new express();
const port=process.env.PORT || 5434;

// 
 
app.get('/',(req,res)=>{
    res.render("index")
});
const userrouter=require('./src/routes/userrouter');
// app.use('/admin', userrouter)

app.set('view engine','ejs');
app.set('views','./src/views');
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));//middlewares to post request

app.get('/mail',function(req,res){
    const name=req.query.name;
    console.log(name);

   
   res.end( res.render('mail',{name}))
});
app.get('/save',function(req,res){
    name=req.query.name;
    recipient=req.query.rname;
    var item={
     name:req.query.name,
     recipient:req.query.rname,
     recipientmail:req.query.rmail,
    }
    user=userdata(item);
    user.save();
    var transporter = nodemailer.createTransport ({ 
            service: 'gmail', 
            auth: { 
                    user: 'diwaliwishes.aiswarya@gmail.com', 
                    pass: 'Aisw@422' 
                } 
            });
        
         
                var mailOptions = { 
                    from: 'diwaliwishes.aiswarya@gmail.com',  
                    to: item.recipientmail,  
                    subject: 'Diwaliwishes', 
                    text:"Happy Diwali" +item.recipient+ "Wishes from" +item.name
                    // html: `<a href='`+link+`'>link</a>` 
                  };
                  transporter.sendMail (mailOptions, function (err, info) { 
                    if (err) 
                      console.log (err) 
                    else 
                      console.log (info); 
                 });
             
res.render('wish',{name,recipient})


})


app.listen(port,()=>{console.log("server ready at"+port)});