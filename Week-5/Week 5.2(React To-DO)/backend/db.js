const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://Admin:fbAZLuTW5FnVPxvg@cluster0.gkdwy.mongodb.net/");

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    Completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}
