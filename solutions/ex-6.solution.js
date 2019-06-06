function solution( Person, console ) {
	// Paste your code/query here
	Person.find( ( { height: { '$gt': 180 }, salary: { '$gt': 30000 } } ), function ( err, people ) {
		console.log( people )
	} )
}

module.exports = solution