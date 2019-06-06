function myConsole( callback: Function ): object {
	return {
		log: function ( message: string ) {
			callback( message )
		}
	}
}

export default myConsole