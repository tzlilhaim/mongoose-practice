import { Mongoose } from 'mongoose'
import MongoDbTester from '../utils/MongoDbTester'
import myConsole from '../utils/console'

const BookModel = require( './../models/BookModel' )
const mongooseClient = require( './../mongoose' )
const exFunction = require( '../solutions/ex-3.solution' )

describe( 'ex-3', () => {
	let mongoose: Mongoose = mongooseClient
	let tester: MongoDbTester

	const DATABASE_NAME = 'mongoose-practice'

	beforeEach( done => {
		tester = new MongoDbTester( mongoose, DATABASE_NAME )
		done()
	} )

	afterEach( done => {
		tester.close()
		done()
	} )

	it( 'You should find books with fewer than 500 but more than 200 pages', done => {
		// Populate

		exFunction( BookModel, myConsole( ( results: [] ) => {
			expect( results.length, 'You should find only the books with fewer than 500 but more than 200 pages' ).toBe( 3 )

			console.log( results )
			done()
		} ) )
	} )
} )