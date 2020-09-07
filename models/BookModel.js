const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/practiceDB",{ useNewUrlParser: true })

const bookSchema = new Schema({
    title: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number
})

const Book = mongoose.model( 'book', bookSchema )
module.exports=Book