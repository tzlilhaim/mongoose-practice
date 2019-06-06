const mongoose = require( '../mongoose' )
const Schema = mongoose.Schema

/*
 *  Exercise 1
 *
 *  Part 1: Create a model called 'Book' with the following properties (in the schema):
 *      title: should be a string
 *      author: should be a string
 *      pages: should be a number
 *      genres: should be an array of strings
 *      rating: should be a number
 *
 *  Don't forget to register the model with the schema, the model name should be 'Book'
 *
 *
 *  Part 2:
 *  Export the model you have just created using module.exports
 */

const bookSchema = new Schema( {
    title: String,
    author: String,
    pages: Number,
    genres: [ String ],
    rating: Number
} )

const Book = mongoose.model( 'Book', bookSchema )
module.exports = Book
