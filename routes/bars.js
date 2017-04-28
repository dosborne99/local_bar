var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var config = require('../config');

/* Passthrough for the Yelp endpoints */
router.get('/', function(req, res, next) {
    var url = "https://api.yelp.com/v3/businesses/search";
    var city = req.query.city;
    //var radius = req.query.radius;
    var token = process.env.TOKEN;
    var Request = unirest
        .get(url)
        .headers({'Authorization':'Bearer ' + token})
        .query({
            term:'bar',
            location:city
        });

    Request.end(function(response){
        res.json(response.body);
    });

});

module.exports = router;
