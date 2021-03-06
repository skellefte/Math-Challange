/**
 * Created by David on 2015-11-27.
 */

var MongoClient;
var assert;
var ObjectId;
var url;

module.exports = {

    initMongoDBConnection: function() {
        MongoClient = require('mongodb').MongoClient;
        assert = require('assert');
        ObjectId = require('mongodb').ObjectID;
        url = 'mongodb://localhost:27017/mathchallange';
    },

    getUsernameAndPasswordFromDB : function(authenticationVariables, callback) {
        MongoClient.connect(url, function (err, db)
        {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                //HURRAY!! We are connected. :)
                console.log('Connection established to', url);

                // Get the documents collection
                var collection = db.collection('users');

                // Insert some users
                collection.find(authenticationVariables, {
                    "username": 1,
                    "password": 1,
                    _id: 0
                }).toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        //login is made successfully.
                        //console.log('Found:', result);
                        //console.log(result[0]);
                    } else {
                        //invalid login
                        //console.log('No document(s) found with defined "find" criteria!');
                    }
                    //Close connection
                    callback(result[0]);
                    db.close();

                });
            }
        });
    },

    addUserToQueue : function (username, elo) {
    MongoClient.connect(url, function (err, db)
    {
        //A control of the doc has to be done before inserting user and elo into db-queue.
        var doc={
            "name" : username,
            "elo" : elo
        };
        if (err)
        {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }
        else
        {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('playerqueueing');

            // Insert some users
            collection.insertOne(doc, function(err, result)
            {
                assert.equal(err, null);
                console.log("Inserted a document into the restaurants collection.");
                //Close connection
                db.close();
            });
        }
    });
    },

    removeUserFromQueue:  function (username)
    {
    MongoClient.connect(url, function (err, db)
    {
        //A control of the doc has to be done before inserting user and elo into db-queue.
        var statement={
            "name" : username
        };
        if (err)
        {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }
        else
        {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('playerqueueing');
            collection.deleteOne(
                statement,  function(err, results) {
                }
            );
        }
    });
    },

    getQuestionStream : function (difficult, indexes , callback) {
    MongoClient.connect(url, function (err, db)
    {
        var statement={
            "difficult" : difficult
        };
        console.log(indexes);
        if (err)
        {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }
        else
        {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('questions');

            collection.find(statement).toArray(function (err, result) {
                if (err) {
                    console.log(err);
                }
                var randomQuestions =[];

                for (var i=0; i<indexes.length; i++){
                    randomQuestions[i]=result[indexes[i]];
                }
                //returns five random questions in json format
                callback(randomQuestions);
                //Close connection

                db.close();
            });
        }
    });
    },

    getQuestionIndexes :function (callback) {
        MongoClient.connect(url, function (err, db) {

            if(err) return callback(err);

            var collection = db.collection("questions");

            collection.count({}, function(err, numOfDocs){

                if(err){
                console.log(err);
            }
                var indexes = getRandomStream(numOfDocs)
                callback(indexes);

        });
    });
}

};

function getRandomStream(n){
    var randomvars=[];
    // recognize already taken variables var takenvars=[];
    var state;
    var i=0
    while(i < 5) {
        var generatedIndex = Math.floor(Math.random()*n);
        state=randomvars.indexOf(generatedIndex);
        if(state == -1){
            randomvars[i]=generatedIndex;
            i++;
        }
    }
    return randomvars;
}

function addUser(userinformation){

}
function getLeaderBoard(){

}


function getQuestionStream(difficult)
{
    MongoClient.connect(url, function (err, db)
    {
        var statement={
            "difficult" : difficult
        };
        if (err)
        {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        }
        else
        {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);

            // Get the documents collection
            var collection = db.collection('playerqueueing');
            collection.deleteOne(
                statement,  function(err, results) {
                }
            );
        }
    });
}
//should be placed in gameModeFile
function getNextQuestion()
{

}
//store the results in the DB.
function storeMatchStatistics(answerReport){

}

