const express = require("express");
const router = express.Router();

const movie = require('../controller/MovieController');

const validator = require('../validator/Validator');
const {validationResult} = require('express-validator');

const MoviesRouter = () => {

        router.get('/', async (req, res) => {
            movie.MovieController.getAll(res);
        });

        router.get('/:id', async (req, res) => {
            movie.MovieController.get(res, req.params.id);
        });


        router.post('/', validator.Validator.MovieCreateValidator(), async (req, res) => {
            movie.MovieController.create(res, validationResult(req), req.body);

        });

        
        router.patch('/:id', validator.Validator.MovieUpdateValidator(), async (req, res) => {
            movie.MovieController.update(res, validationResult(req), req.params.id, req.body);
        });

        
        router.patch('/:id/like', async (req, res) => {
            movie.MovieController.like(res, req.params.id);
        });

        
        router.delete('/:id', async (req, res) => {
            movie.MovieController.delete(res, req.params.id);
        });

    return router;
}

module.exports.MoviesRouter = MoviesRouter;