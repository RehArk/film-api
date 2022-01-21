const firebase = require('firebase-admin');
const { Service } = require('./Service');

module.exports.MovieService = class MovieService extends Service {

    constructor (db) {
        super(db, "movies");
    }

    like(id) {

        return this.db.collection(this.table).doc(id)
            .update("like", firebase.firestore.FieldValue.increment(1))
            .then((element) => {
                return {code: 200, data: `${this.name()} succesfull liked`}
            })
            .catch((e) => {
                if(e.code == 5) {
                    return {code: 500, data: `404 Error : ${this.name()} not found`}
                }
                return {code: 500, data: `Could not like ${this.name(false)}`}
            })
        ;
    }
    
}