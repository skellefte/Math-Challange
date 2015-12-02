/**
 * Created by David on 2015-11-26.
 */

//try insert document to DB

//Database variables

var movies = require('./movies');
var DBCommands= require('./dataBaseCommands');

var authenticationVariables = {
    "username": "kalle",
    "password" : "manhattan"
};

DBCommands.initMongoDBConnection();
movies.printAvatar();
movies.printChappie();
//initMongoDBConnection();
DBCommands.getUsernameAndPasswordFromDB()
console.log("Running dbAPI");

//DBCommands.addUserToQueue("pelle", 1300);
DBCommands.removeUserFromQueue("pelle");



function insertUser(userReqisterDocument) {
    //TODO Check if userRegisterDocument is valid only valid symbols permitted.


    var insertUserDocument = function(db, callback) {
        db.collection('users').insertOne(userRegisterDocument , function(err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the user collection.");
            callback(result);
        });
    };
}

function isUserAuthenticated(authenticationVariables){
    //TODO Check if authenticationDocument is valid only valid symbols permitted.

    //getUsernameAndPasswordFromDB(authenticationVariables);
}






var userRegisterDocument=
{
    "email" : "kalle@fasd.com",
    "username" : "kalle",
    "password" : "manhattan",
    "elo" : "1500",
    "profilepicture" : "hyperlink_to_picture"
};


isUserAuthenticated(authenticationVariables);






