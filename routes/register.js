/**
 * Created by naixlesl on 03/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sess = require('../session')

/* GET home page. (index.ejs) */
router.get('/', function(req, res, next) {
    sess.session();
    res.render('register', { title: 'Math Challenge' });
});



router.post('/', function(req, res) {

    var buttonPress = req.body.submitForm;
    switch (buttonPress)
    {
        case "reg":
            res.redirect('/main');

    }

});


module.exports = router;