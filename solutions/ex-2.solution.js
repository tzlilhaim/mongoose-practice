const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

/*
 *  Exercise 2
 *
 *  Part 1: Create a model called 'Person' with the following properties (in the schema):
 *      hair: should be a string
 *      eyes: should be a string
 *      weight: should be a number
 *      height: should be a number
 *      salary: should be a number
 *      numKids: should be a number
 *      kids: should be an array
 *
 *  Don't forget to register the model with the schema, the model name should be 'Person'
 *
 *
 *  Part 2:
 *  Export the model you have just created using module.exports
 */


const personSchema = new Schema( {
    hair: String,
    eyes: String,
    weight: Number,
    height: Number,
    salary: Number,
    numKids: Number,
    kids: []
} )

const Person = mongoose.model( 'Person', personSchema )
module.exports = Person
