const validator = require('../validator/Validator');
const {validationResult} = require('express-validator');

const movie = require('../controller/MovieController');
const categorie = require('../controller/CategorieController');

module.exports.Router = class Router {

    constructor(app) {

        app.get('/', (req, res) => {
            res.status(200).send('<h1>My absolute Masterclass awesome API</h1>');
        });
        
    }

}