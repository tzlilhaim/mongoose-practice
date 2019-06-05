const child_process = require( 'child_process' )

// describe( 'ex-1', () => {
// 	it( 'should do something', () => {
		child_process.exec( 'node solutions/ex-1.js', function ( a, stdout ) {
			console.log( stdout.indexOf("The Dark Tower") )
			// try {
			// 	const json = JSON.parse( stdout )
			// 	console.log( json )
			// } catch ( e ) {
			// 	console.log( e.message )
			// }
		} )
	// } )
// } )

