const mongoose = require( 'mongoose' )

mongoose.connect( 'mongodb://localhost/mongoose-practice', { useNewUrlParser: true } )

const Book = require( '../models/BookModel' )

// Find books with fewer than 500 but more than 200 pages
Book.find( ( { pages: { '$lt': 500, '$gt': 200 } } ), function ( err, books ) {
	console.log( JSON.stringify( books ) )
	mongoose.disconnect()
} )

