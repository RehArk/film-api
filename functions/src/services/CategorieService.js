const { Service } = require("./Service");

module.exports.CategorieService = class CategorieService extends Service{

    constructor (db) {
        super(db, "categories");
    }
    
}