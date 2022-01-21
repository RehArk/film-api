const { entity } = require("./Entity");

module.exports.Categorie = class Categorie extends entity {

    constructor(data) {

        super();

        this.name = data.name;
    }
    
}