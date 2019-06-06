function solution( Person, console ) {
	// Paste your code/query here
	Person.find( { $or: [ { height: { '$gt': 180 } }, { salary: { '$gt': 30000 } } ] }, function ( err, people ) {
		console.log( people )
	} )
}

module.exports = solution