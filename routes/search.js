/**
 * Created by naixlesl on 02/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. (search.ejs) */
router.get('/', function(req, res, next) {
    res.render('search', { title: 'Math Challenge' });
});


router.post('/', function(req, res) {
    var buttonPress = req.body.submitForm;
    switch (buttonPress)
    {
        case "Friend":
            res.redirect('/game');
            break;
        case "Random":
            res.redirect('/game');
            break;
        case "Main page":
            res.redirect('/main');
            break;
    }
});

module.exports = router;