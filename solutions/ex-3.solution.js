function solution( Book, console ) {
	// Paste your code/query here
	Book.find( ( { pages: { '$lt': 500, '$gt': 200 } } ), function ( err, books ) {
		console.log( books )
	} )
}

module.exports = solution