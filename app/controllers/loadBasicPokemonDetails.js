'use strict';

let fs = require('fs'),
    basicPokemonDetail = require('../models/BasicPokemonDetail.js'),
    pokemonListPath = require('../../resources/json/pokemonlist.json');

function loadBasicPokemonDetails() {
    logger.info('Loading Basic Pokemon Details to MongoDB');

    let data = JSON.stringify(pokemonListPath, function(key,value) {
        var pokemonID, pokemonName, gender;
        if(key != 'name' && typeof value.name !== "undefined") {
            pokemonID = key;
            pokemonName = value.name;
            gender = value.gender;

            basicPokemonDetail.create({pokemonID: pokemonID, name: pokemonName, gender: gender}, function(err, post){
                if(err) {
                    if (err.name === 'MongoError' && err.code === 11000) {
                        // TODO Handling for duplicate pokemons
                    } else {
                        logger.error(err);
                    }
                } else {
                    logger.info(post);
                }
            });
        }
        return value;
    });
}

module.exports = {
    start: loadBasicPokemonDetails
};