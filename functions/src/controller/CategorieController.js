const categorieServiceClass = require('../services/CategorieService');
const categorieClass = require('../entity/Categorie');
const db = require('../Db');

module.exports.CategorieController = class CategorieController {

    static async getAll(res) {
        let categorieService = new categorieServiceClass.CategorieService(db);
        categorieService.getAll()
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static create(res, errors, data) {

        if(!errors.isEmpty()) {
            res.status(422).json(errors)
            throw 'Invalid input';
        }

        let categorieService = new categorieServiceClass.CategorieService(db);
        
        categorieService.create(new categorieClass.Categorie(data))
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static get(res, id) {
        let categorieService = new categorieServiceClass.CategorieService(db);
        categorieService.get(id)
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static update(res, errors, id, data) {

        if(!errors.isEmpty()) {
            res.status(422).json(errors)
            throw 'Invalid input';
        }

        let categorieService = new categorieServiceClass.CategorieService(db);
        categorieService.update(id, new categorieClass.Categorie(data))
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static delete(res, id) {
        let categorieService = new categorieServiceClass.CategorieService(db);
        categorieService.delete(id) .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

}