// Our Setup - Feel free to ignore all of this and skip to the questions at the end
require( 'dotenv' ).config()
const express = require( 'express' )
const app = express()
const bodyParser = require( 'body-parser' )
const mongoose = require( 'mongoose' )
const BooksPopulator = require( './populators/books' )
const PeoplePopulator = require( './populators/people' )

mongoose.connect( 'mongodb://localhost/mongoose-practice', { useNewUrlParser: true } )

app.use( bodyParser.urlencoded( { extended: false } ) )
app.use( bodyParser.json() )

/*
 * CREATE BOOKS & PEOPLE COLLECTIONS
 * the first time you run your code, uncomment the function below.
 * for subsequent runs, re-comment it so that it runs only once!
 * that said, there is a fail-safe to avoid duplicates below
*/
BooksPopulator.populate()
PeoplePopulator.populate()

// Start the server
app.listen( process.env.SERVER_PORT, () => console.log( `Server up and running on port ${ process.env.SERVER_PORT }` ) )

/*=====================================================
Exercises - now that your databases are full 
and your server is running do the following:
=======================================================*/

//Important note: Once you've run the above code once, COMMENT IT OUT
//If you keep re-running this whole file, you'll keep making a ton of requests to the Books API and eventually you will get blocked.
//DON'T GET BLOCKED

/*Books
----------------------*/
//1. Find books with fewer than 500 but more than 200 pages

//2. Find books whose rating is less than 5, and sort by the author's name

//3. Find all the Fiction books, skip the first 2, and display only 3 of them 


/*People
----------------------*/
//1. Find all the people who are tall (>180) AND rich (>30000)

//2. Find all the people who are tall (>180) OR rich (>30000)

//3. Find all the people who have grey hair or eyes, and are skinny (<70)

//4. Find people who have at least 1 kid with grey hair

//5. Find all the people who have at least one overweight kid, and are overweight themselves (>100)
