var mongoose=require('mongoose');

var Schema = mongoose.Schema;


var schema= new Schema({
     "Student_Id":{type:String},

    "Term":{type:String},


    "date":{type:String},
    "Fee_Paid":{type:String},
    "Pending_Fee":{type:String}

})

module.exports=mongoose.model('payments',schema);
