const mongoose = require( 'mongoose' )
mongoose.connect( 'mongodb://localhost/mongoose-practice', { useNewUrlParser: true, useFindAndModify: false } )

module.exports = mongoose