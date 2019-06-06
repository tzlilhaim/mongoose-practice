// Write your code here, but make sure to add the relevant solutions to the `.solution` files

const Book = require('./../models/BookModel')
const Person = require('./../models/PersonModel')

// Find books whose rating is less than 5, and sort by the author's name
Book.find( { rating: { '$lt': 5 } } ).sort( { author: -1 } ).exec( function ( err, books ) {
	console.log( books )
} )
``