"use strict";

const pokemon = require('../stores/pokemon');

module.exports = {
    /**
     * @api {get} /api/pokemon/ GetAllPokemons
     * @apiVersion 0.0.1
     * @apiName GetAllPokemons
     * @apiDescription Get all pokemons.
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     *      "_id": "57b60a60f3981b52102ef562",
     *      "deviceId": "80sxy0vumg2h5hhv8hgc0axt9jr29al7",
     *       "userId": "13661365",
     *       "trainerName": "(Poke Radar Prediction)",
     *       "pokemonId": "133",
     *       "longitude": 2.3887459103,
     *       "latitude": 48.8923425896,
     *       "upvotes": 1,
     *       "downvotes": 0,
     *       "created": 1470888182,
     *       "id": "Sybxo5uYt",
     *       "__v": 0
          }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getAll: function (req, res) {
        logger.info('GetAllPokemons');

        pokemon.getAll(function(success, pokemons) {
            logger.info(pokemons);
            res.status(200).json(pokemons);
        });
    },

    /**
     * @api {get} /api/pokemon/id/:id GetPokemonById
     * @apiVersion 0.0.1
     * @apiName GetPokemonById
     * @apiDescription Get pokemon by specific id
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getById : function (req, res) {
        logger.info('Get Pokemon details of a particular pokemon by id');

        pokemon.getById(req.params.id, function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure. No pokemon details with this id exists!', data: message});
        });
   },
    /**
     * @api {get} /api/pokemon/gender/:gender GetPokemonByGender
     * @apiVersion 0.0.1
     * @apiName GetPokemonByGender
     * @apiDescription Get pokemon by specific gender
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getByGender : function (req, res) {
        logger.info('Get Pokemon details by gender');

        pokemon.getByGender(req.params.gender.toLowerCase(), function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure. No pokemon details with this gender exists!', data: message});
        });
    },

    /**
     * @api {get} /api/pokemon/name/:name/ GetPokemonByName
     * @apiVersion 0.0.1
     * @apiName GetPokemonByName
     * @apiDescription Get pokemon by specific name
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getByName : function (req, res) {
        logger.info('Get Pokemon details by name');

        pokemon.getByName(req.params.name, function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure. No pokemon details with this name exists!', data: {'name': req.params.name}});
        });
    },
    /**
     * @api {get} /api/pokemon/type/:type/ GetPokemonByType
     * @apiVersion 0.0.1
     * @apiName GetPokemonByType
     * @apiDescription Get pokemon by specific type
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getByType : function (req, res) {
        logger.info('Get Pokemon details by type');

        pokemon.getByType(req.params.type, function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure. No pokemon details with this type exists!', data: {'type': req.params.type}});
        });
    },
    /**
     * @api {get} /api/pokemon/resistance/:resistance/ GetPokemonByResistance
     * @apiVersion 0.0.1
     * @apiName GetPokemonByResistance
     * @apiDescription Get pokemon by specific resistance
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getByResistance : function (req, res) {
        logger.info('Get Pokemon details by resistance');

        pokemon.getByResistance(req.params.resistance, function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure.', data: message});
        });
    },
    /**
     * @api {get} /api/pokemon/weakness/:weakness/ GetPokemonByWeakness
     * @apiVersion 0.0.1
     * @apiName GetPokemonByWeakness
     * @apiDescription Get pokemon by specific weakness
     * @apiGroup Pokemon
     *
     * @apiSuccessExample {json} Success
     * HTTP/1.1 200 OK
     * [
     *    {
     * "_id": "57c029e830632cbc2954518d",
     * "source": "TWITTER",
     *  "pokemonId": 54,
     * "appearedOn": "2016-08-26T11:37:12.469Z",
     * "__v": 0,
     * "location": {
     *     "coordinates": [
     *        14.017842,
     *        14.017842
           ]
     *     "type": "Point"
     *  }
     * }
     * ]
     *
     * @apiSuccessExample {json} No db-entries:
     * HTTP/1.1 200 OK
     * [
     * ]
     */
    getByWeakness : function (req, res) {
        logger.info('Get Pokemon details by weakness');

        pokemon.getByWeakness(req.params.weakness, function(success, message) {
            if(success === 1)
                res.status(200).json({message: 'Success', data: message});
            else
                res.status(404).json({message: 'Failure.', data: message});
        });
    }
};