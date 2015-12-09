/**
 * Created by naixlesl on 02/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var Uppgifter = ['4*5', '5*10', '2*2'];
var Svar = [20, 50, 4];
var Index = 0;
var resultList = [];
var tempList = [];
/* GET home page. (game.ejs) */
router.get('/', function(req, res, next) {
    res.render('game', {
        title: 'Math Challenge',
        Equation: Uppgifter[Index],
        Answer: resultList
    });

});

var n = "";
router.post('/', function(req, res) {

    var buttonPress = req.body.inputNUM;


    //console.log(buttonPress);

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
        case "0":
            n = n + "0";
            break;
        case "OK":

            //TODO: Spara Rätt eller fel, uppgiftID resultat och skicka vidare till result-sidan
            if (n == Svar[Index])
            {
                //resultList[n] = {
                //    result : 0,
                //    questionID : id,
                // };

                resultList[Index] = "Rätt";

                console.log("---------------");
                console.log("Correct answer!");
                console.log("---------------");
                n = "";


                if (Index < 2) {
                    Index = Index + 1;
                    res.render('game', {
                        title: 'Math Challenge',
                        Equation: Uppgifter[Index],
                        Answer: resultList
                    });
                }
                else
                {
                    tempList = resultList;
                    resultList = [];
                    Index = 0;
                    res.redirect('/results');
                }
            }

            else
            {
                resultList[Index] = "Fel";

                console.log("-----------------");
                console.log("Incorrect answer!");
                console.log("-----------------");
                n= "";
                if (Index < 2){
                    Index = Index + 1;
                    res.render('game', {
                        title: 'Math Challenge',
                        Equation: Uppgifter[Index],
                        Answer: resultList
                    });
                }
                else
                {
                    tempList = resultList;
                    resultList = [];
                    Index = 0;
                    res.redirect('/results');
                }
            }
            break;
        case "<--":
            res.redirect('/search');
            break;


    }

});




module.exports = router;