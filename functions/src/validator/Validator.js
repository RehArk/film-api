const {check, body} = require('express-validator');

const CategorieService = require('../services/CategorieService');
const db = require('../Db');

module.exports.Validator = class Validator {

    static MovieCreateValidator() {

        return [
            check('author').trim().escape().isLength({ min: 4, max: 25 }),
            body('categorie').trim().escape().isLength({ min: 20, max: 20 })
                .custom((categorie) => {
                    return new Promise(async (resolve, reject) => {

                        try {

                            let categorieService = new CategorieService.CategorieService(db);
                            let result = await categorieService.get(categorie)

                            if (result.code != 500 && result.data) {
                                resolve();
                            }
                            
                            reject();
                            
                        } catch (error) {
                            console.log(console.error())
                            reject();
                        }
                    })
                })
            ,
            check('description').trim().escape().isLength({ min: 4, max: 250 }),
            check('image').trim().escape().isLength({max: 2000 }),
            check('name').trim().escape().isLength({ min: 4, max: 50 }),
            check('video').trim().escape().isLength({max: 2000 }),
        ];

    }

    static MovieUpdateValidator() {

        return [
            check('author').trim().escape().isLength({ min: 4, max: 25 }).optional(),
            check('categorie').trim().escape().isLength({ min: 20, max: 20 }).optional()
                .custom((categorie) => {
                    return new Promise(async (resolve, reject) => {

                        try {

                            let categorieService = new CategorieService.CategorieService(db);
                            let result = await categorieService.get(categorie)

                            if (result.code != 500 && result.data) {
                                resolve();
                            }
                            
                            reject();
                            
                        } catch (error) {
                            console.log(console.error())
                            reject();
                        }
                    })
                })
            ,
            check('description').trim().escape().isLength({ min: 4, max: 250 }).optional(),
            check('image').trim().escape().isLength({max: 2000 }).optional(),
            check('name').trim().escape().isLength({ min: 4, max: 50 }).optional(),
            check('video').trim().escape().isLength({max: 2000 }).optional(),
        ];

    }

    static CategorieFormValidator() {

        return [
            check('name').trim().escape().isLength({ min: 4, max: 25 }),
        ];

    }

}