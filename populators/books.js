const request = require( 'request' )
const Book = require( './../models/BookModel' )

const isbns = [ 9780156012195, 9780743273565, 9780435905484, 9780140275360, 9780756404741, 9780756407919, 9780140177398, 9780316769488, 9780062225672, 9780143130154, 9780307455925, 9781501143519 ]
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'

const BooksPopulator = {
    loadFromAPI: function( apiURL ) {
        request( apiURL, function ( error, response, body ) {

            const result = JSON.parse( body )

            if ( result.totalItems && !error && response.statusCode === 200 ) {
                const resBook = JSON.parse( body ).items[ 0 ].volumeInfo

                const book = new Book( {
                    title: resBook.title,
                    author: resBook.authors[ 0 ],
                    pages: resBook.pageCount,
                    genres: resBook.categories || [ 'Other' ],
                    rating: resBook.averageRating || 5
                } )

                //Only save if the book doesn't exist yet
                Book.findOne( { title: book.title }, function ( err, foundBook ) {
                    if ( !foundBook ) {
                        book.save()
                    }
                } )
            }
        } )
    },

    populate: function() {
        for ( let i = 0; i < isbns.length; i++ ) {
            const apiURL = API_URL + isbns[ i ]
            this.loadFromAPI( apiURL )
        }
        console.log( 'done' )
    }
}

module.exports = BooksPopulator


