import { Mongoose } from 'mongoose'
import MongoDbTester from '../utils/MongoDbTester'

describe( 'ex-2', () => {
	let mongoose: Mongoose = require( '../mongoose' )
	let tester: MongoDbTester
	require( '../models/PersonModel' )

	const DATABASE_NAME = 'mongoose-practice'
	const TEST_MODEL_NAME = 'Person'

	beforeEach( done => {
		tester = new MongoDbTester( mongoose, DATABASE_NAME )


		done()
	} )

	afterEach( done => {
		tester.close()

		done()
	} )

	it( 'Create model called Person and fill the Schema with the right properties', done => {
		tester.setModelName( TEST_MODEL_NAME )
		expect( tester.isModelExists(), `You should create a model called ${ TEST_MODEL_NAME }` ).toBeTruthy()
		tester.applyActualModel()

		const schema: any = tester.fetchModelSchema()

		const schemaExpectedKeys = [ 'hair', 'eyes', 'weight', 'height', 'salary', 'numKids', 'kids' ]
		const schemaActualKeys: string[] = Object.keys( schema )

		for ( const key of schemaExpectedKeys ) {
			expect( schemaActualKeys, `You should define '${ key }' property in your Schema` ).toContain( key )
		}

		done()
	} )
} )