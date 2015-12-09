var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. (main.ejs) */
router.get('/', function(req, res, next) {

    /*

         if (session)
         {
            res.render('main', { title: 'Math Chanllenge' });
         }
         else
         {
            res.redirect('/');
         }

    */

    res.render('main', { title: 'Math Challenge' });
});


router.post('/', function(req, res) {

    var buttonPress = req.body.submitForm;
    switch (buttonPress)
    {
        case "Search":
            res.redirect('/search');
            break;
        case "Leaderboard":
            res.redirect('/');
            break;
        case "Change password":
            res.redirect('/changePass');
            break;
        case "Friends":
            res.redirect('/');
            break;
        case "Profile_picture":
            res.redirect('/');
            break;
        case "Logout":
            res.redirect('/');
            break;

    }

});


module.exports = router;