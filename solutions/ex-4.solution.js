function solution( Book, console ) {
	// Paste your code/query here
	Book.find( { rating: { '$lt': 5 } } ).sort( { author: -1 } ).exec( function ( err, books ) {
		console.log( books )
	} )
}

module.exports = solution