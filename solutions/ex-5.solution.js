function solution( Book, console ) {
	// Paste your code/query here
	Book.find( { genres: 'Fiction' } ).skip( 2 ).limit( 3 ).exec( function ( err, books ) {
		console.log( books )
	} )
}

module.exports = solution