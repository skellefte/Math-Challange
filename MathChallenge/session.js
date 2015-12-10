/**
 * Created by naixlesl on 02/12/15.
 */
var sess;
function session()
{

    console.log("You are now i session!");
    /*
    sess=req.session;
    /*
     * Here we have assign the 'session' to 'sess'.
     * Now we can create any number of session variable we want.
     * in PHP we do as $_SESSION['var name'].
     * Here we do like this.

    sess.email = "hejhopp"; // equivalent to $_SESSION['email'] in PHP.

    console.log(sess.email);*/
}

module.exports.session= session;