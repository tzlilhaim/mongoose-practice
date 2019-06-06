function solution( Person, console ) {
	// Paste your code/query here
	Person.find( { kids: { $elemMatch: { hair: 'grey' } } } ).exec( function ( err, people ) {
		console.log( people )
	} )
}

module.exports = solution