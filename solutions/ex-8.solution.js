function solution( Person, console ) {
	// Paste your code/query here
	Person.find().and( [
		{ $or: [ { hair: 'grey' }, { eyes: 'grey' } ] },
		{ weight: { '$lt': 70 } }
	] ).exec( function ( err, people ) {
		console.log( people )
	} )
}

module.exports = solution