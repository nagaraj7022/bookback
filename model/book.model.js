const mongoose=require("mongoose")
const bookSchema=mongoose.Schema({
    Title:{type:String,required:true},
    Author:{type:String,required:true},
    Genre:{type:String,enum:["Fiction","Science","Comic"],required:true
    },
    Discription:{type:String,required:true},
    Price:{type:Number,required:true}
},{
    versionKey:false
})

const BookModel=mongoose.model('book',bookSchema);
module.exports={BookModel}





