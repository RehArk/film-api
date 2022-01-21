const express = require("express");
const router = express.Router();

const categorie = require('../controller/CategorieController');

const validator = require('../validator/Validator');
const {validationResult} = require('express-validator');

const CategoriesRouter = () => {

    router.get('/', async (req, res) => {
        categorie.CategorieController.getAll(res);
    });

    router.get('/:id', async (req, res) => {
        categorie.CategorieController.get(res, req.params.id);
    });

    router.post('/', validator.Validator.CategorieFormValidator(), async (req, res) => {
        categorie.CategorieController.create(res, validationResult(req), req.body);
    });
    // not working
    router.put('/:id', validator.Validator.CategorieFormValidator(), async (req, res) => {
        categorie.CategorieController.update(res, validationResult(req), req.params.id, req.body);
    });

    router.delete('/:id', async (req, res) => {
        categorie.CategorieController.delete(res, req.params.id);
    });
    
    return router;

}

module.exports.CategoriesRouter = CategoriesRouter;
