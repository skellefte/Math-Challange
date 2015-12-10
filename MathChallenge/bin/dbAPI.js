/**
 * Created by David on 2015-11-26.
 */

//try insert document to DB

//Database variables

var movies = require('./movies');
var DBCommands= require('./dataBaseCommands');

/*
var authenticationVariables = {
    "username": "kalle",
    "password" : "manhattan"
};
*/

DBCommands.initMongoDBConnection();
console.log("Running dbAPI");

var difficult= "easy";


/*
DBCommands.getQuestionIndexes(function(data){
    var indexes=data;
    DBCommands.getQuestionStream(difficult, indexes, function(data) {
        questions=data;
    });
});
*/

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
module.exports = {
    AuthenticateUser :function(authenticationVariables, callback)
{
    //TODO Check if authenticationDocument is valid only valid symbols permitted.

    DBCommands.getUsernameAndPasswordFromDB(authenticationVariables, function(data)
    {
        returnvalue=data;
        if(JSON.stringify(authenticationVariables)===JSON.stringify(returnvalue)){
            console.log("hai welcome to da homepage");
            callback(returnvalue);
            //set loginSession to true
            //example Session[kalle]=true
        }
        else
        {
            console.log("wrong username or password");
            callback(returnvalue);
            //wrong password or username -> redirect to login-page
        }

    });
}
};
//AuthenticateUser(authenticationVariables);

//  User Authentication function without export module
/*function AuthenticateUser(authenticationVariables)
{
    //TODO Check if authenticationDocument is valid, only valid symbols permitted.

    DBCommands.getUsernameAndPasswordFromDB(authenticationVariables, function(data)
    {
        returnvalue=data;
        if(JSON.stringify(authenticationVariables)===JSON.stringify(returnvalue)){
            console.log("hai welcome to da homepage");
            //set loginSession to true
            //example Session[kalle]=true
        }
        else
        {
            console.log("wrong username or password");
            //wrong password or username -> redirect to login-page
        }

    });
}*/




var userRegisterDocument=
{
    "email" : "kalle@fasd.com",
    "username" : "kalle",
    "password" : "manhattan",
    "elo" : "1500",
    "profilepicture" : "hyperlink_to_picture"
};


//isUserAuthenticated(authenticationVariables);






