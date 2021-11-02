const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://userone:userone@ictkfiles.s2x9o.mongodb.net/DIWALIAPP?retryWrites=true&w=majority');
// var fs = require(‘fs’);
// const multer = require('multer');
const Schema=mongoose.Schema;

const userSchema = new Schema({
   name:String,
  recipient:String,
  recipientmail:String,
 
}); 
//image schema


var userdata=mongoose.model('userdata',userSchema);
module.exports =userdata; 