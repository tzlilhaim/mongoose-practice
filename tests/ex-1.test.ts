import { Mongoose, Schema } from 'mongoose'
import MongoDbTester from '../utils/MongoDbTester'

describe( 'ex-1', () => {
	let mongoose: Mongoose = require( '../mongoose' )
	let tester: MongoDbTester
	require( '../models/BookModel' )

	const DATABASE_NAME = 'mongoose-practice'
	const TEST_MODEL_NAME = 'Book'

	beforeEach( done => {
		tester = new MongoDbTester( mongoose, DATABASE_NAME )


		done()
	} )

	afterEach( done => {
		tester.close()

		done()
	} )

	it( 'Create model called Book and fill the Schema with the right properties', done => {
		tester.setModelName( TEST_MODEL_NAME )
		expect( tester.isModelExists(), `You should create a model called ${ TEST_MODEL_NAME }` ).toBeTruthy()
		tester.applyActualModel()

		const schema: any = tester.fetchModelSchema()

		const schemaExpectedKeys: string[] = [ 'title', 'author', 'pages', 'genres', 'rating' ]
		const schemaActualKeys: string[] = Object.keys( schema )

		for ( const key of schemaExpectedKeys ) {
			expect( schemaActualKeys, `You should define '${ key }' property in your Schema` ).toContain( key )
		}

		done()
	} )
} )