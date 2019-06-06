function solution( Person, console ) {
	// Paste your code/query here
	Person.find().and( [
		{ weight: { '$gt': 100 } },
		{ kids: { $elemMatch: { weight: { '$gt': 100 } } } }
	] ).exec( function ( err, people ) {
		console.log( people )
	} )
}

module.exports = solution