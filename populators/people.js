const Person = require( './../models/PersonModel' )

const PeoplePopulator = {
    colors: [ 'brown', 'black', 'red', 'yellow', 'green', 'grey' ],

    getColor: function () {
        return this.colors[ Math.floor( Math.random() * this.colors.length ) ]
    },

    getWeight: function () {
        return this.getRandIntBetween( 50, 120 )
    },

    getHeight: function () {
        return this.getRandIntBetween( 120, 230 )
    },

    getSalary: function () {
        return this.getRandIntBetween( 20000, 50000 )
    },

    getNumKids: function () {
        return Math.floor( Math.random() * 3 )
    },

    getRandIntBetween: function ( min, max ) {
        return Math.floor( Math.random() * ( max - min + 1 ) + min )
    },

    getKids: function ( numKids ) {
        const kids = []

        for ( let i = 0; i < numKids; i++ ) {
            kids.push( {
                hair: this.getColor(),
                eyes: this.getColor(),
                weight: this.getWeight(),
                height: this.getHeight(),
            } )
        }

        return kids
    },

    /*=====================================================
    the below code always makes sure
    you don't have over 100 people and
    adds new people and their kids until you do have 100

    try to understand how this code works
    could you write it differently?
    =======================================================*/
    populate: function () {
        Person.find( {} ).countDocuments( ( err, count ) => {
            // the below two loops could be changed to a simple:
            // for ( let i = count; i < 100; i++ ) {}
            if ( count < 100 ) {
                for ( let i = 0; i < 100 - count; i++ ) {
                    const numKids = this.getNumKids()

                    const p = new Person( {
                        hair: this.getColor(),
                        eyes: this.getColor(),
                        weight: this.getWeight(),
                        height: this.getHeight(),
                        salary: this.getSalary(),
                        numKids: numKids,
                        kids: this.getKids( numKids )
                    } )

                    p.save()
                }
            }
        } )
    }
}

module.exports = PeoplePopulator


