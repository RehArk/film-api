const movieServiceClass = require('../services/MovieService');
const movieClass = require('../entity/Movie');
const db = require('../Db');

module.exports.MovieController = class MovieController {

    static getAll(res) {
        let movieService = new movieServiceClass.MovieService(db);
        movieService.getAll()
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static get(res, id) {
        let movieService = new movieServiceClass.MovieService(db);
        movieService.get(id)
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

        let movieService = new movieServiceClass.MovieService(db);
        
        movieService.create(new movieClass.Movie(data))
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

        let movieService = new movieServiceClass.MovieService(db);
        movieService.update(id, new movieClass.Movie(data))
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static like(res, id) {
        let movieService = new movieServiceClass.MovieService(db);
        movieService.like(id)
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

    static delete(res, id) {
        let movieService = new movieServiceClass.MovieService(db);
        movieService.delete(id)
            .then((success) => {
                res.status(success.code).json(success.data);
            })
            .catch((error) => {
                res.status(error.code).json(error.data);
            })
        ;
    }

}