const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/practiceDB",{ useNewUrlParser: true })

const personSchema = new Schema({
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids:Number,
    kids: []
})

const Person = mongoose.model( 'person', personSchema )
module.exports=Person