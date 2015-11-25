var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });

    // Retrieve DB
    var MongoClient = require('mongodb').MongoClient;
    // Connect to the db
    MongoClient.connect("mongodb://192.168.1.103:27017/bank", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        //db.createCollection('kalle', function(err, collection) {});
    });
    console.log('kalle');

});





module.exports = router;
