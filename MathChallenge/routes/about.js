var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About' });

/*    // Retrieve DB
    var MongoClient = require('mongodb').MongoClient;
    // Connect to the db
    MongoClient.connect("mongodb://192.168.1.103:27017/bank", function(err, db) {
        if(!err) {
            console.log("We are connected");
        }
        //db.createCollection('kalle', function(err, collection) {});
    });*/
    console.log('about page running');


    //try insert document to DB

    var MongoClient = require('mongodb').MongoClient;
    var assert = require('assert');
    var ObjectId = require('mongodb').ObjectID;
    var url = 'mongodb://localhost:27017/mathchallange';


    var userRegisterDocument=
    {
        "email" : "kalle@fasd.com",
        "username" : "kalle",
        "password" : "manhattan",
        "elo" : "1500",
        "profilepicture" : "hyperlink_to_picture"
    };

    var authenticationVariables = {
        "username": "kalle",
        "password" : "manhattan"
    };


    var getUserDocument = function(db, callback) {
        var cursor = db.collection('users').find(authenticationVariables);
        cursor.each(function(err, doc) {
            assert.equal(err, null);
            if (doc != null) {
                console.dir(doc);
            } else {
                callback();
            }
        });
    };

    var insertUserDocument = function(db, callback) {
        db.collection('users').insertOne(userRegisterDocument , function(err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the user collection.");
            callback(result);
        });
    };

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        getUserDocument(db,function()
        {
            db.close();
        });
        /*insertUserDocument(db, function() {
            db.close();
        });*/
    });

});

module.exports = router;
