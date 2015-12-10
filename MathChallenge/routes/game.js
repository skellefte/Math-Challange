/**
 * Created by naixlesl on 02/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var k = ['4*5', '5*10', '2*2'];
//var s = [20, 50, 4];
//var p = 0;
/* GET home page. (search.ejs) */
router.get('/', function(req, res, next) {
    res.render('game', {
        title: 'Math Challenge',
        Equation: k[p]
    });

});

var n = "";
router.post('/', function(req, res) {

    var buttonPress = req.body.inputNUM;
    var k = "45";


    console.log(buttonPress);
    //TODO: Försöka att hitta ett sett att printa ut i browsern
    switch (buttonPress)
    {
        case "1":
            n = n + "1";
            break;
        case "2":
            n = n + "2";
            break;
        case "3":
            n = n + "3";
            break;
        case "4":
            n = n + "4";
            break;
        case "5":
            n = n + "5";
            break;
        case "6":
            n = n + "6";
            break;
        case "7":
            n = n + "7";
            break;
        case "8":
            n = n + "8";
            break;
        case "9":
            n = n + "9";
            break;
        case "OK":
            if (n == k)
            {
                console.log("Correct answer!");
                n = "";
                //TODO: Anropa nästa fråga
            }
            else
            {
                console.log("Incorrect answer!");
                n= "";
                //TODO: Anropa nästa fråga
            }
            break;
        case "<--":
            res.redirect('/search');
            break;


    }

});




module.exports = router;