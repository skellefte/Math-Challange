/**
 * Created by naixlesl on 09/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. (results.ejs) */
router.get('/', function(req, res, next) {
    res.render('results', {
        title: 'Math Challenge',
        Result: "fefelrätt"
    });
});


router.post('/', function(req, res) {
    var buttonPress = req.body.submitForm;
    switch (buttonPress)
    {
        case "Main":
            res.redirect('/main');

    }

});

module.exports = router;