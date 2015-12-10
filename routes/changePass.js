/**
 * Created by naixlesl on 02/12/15.
 */
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET home page. (changePass.ejs) */
router.get('/', function(req, res, next) {
    res.render('changePass', { title: 'Math Challenge' });
});


router.post('/', function(req, res) {

    var User = req.body;

    if(User.oldpassword == "hej1")
    {
        if(User.newPassword == User.ReNewpassword)
        {
            console.log("Success!");
            res.redirect('/main');
        }
        console.log("Passwords dont match !");
        res.redirect('/changePass');
    }
    else
    {
        console.log("Wrong password!");
        res.redirect('/changePass');
    }


});




module.exports = router;