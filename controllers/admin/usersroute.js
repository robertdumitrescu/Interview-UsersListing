var express = require('express');
var router = express.Router();


/** Models */

var User = require("../../models/usermodel");



/** Route user Listing */
router.get('/', function (req, res) {
    res.render('admin/users/listingview.jade',
        {global_path: JSON.stringify({"global_path" : GLOBAL.baseRelativeUrl})}
    );
});

/**
 *  @description Route get the dummy data
 **/

router.get('/data', function (req, res) {

        User.prototype.getAllUsers(function (data_array) {

            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(data_array));

        });

});

/**
 *  @description Route to server the jade view for preview action
 **/

router.get('/view', function (req, res) {

    res.render('admin/users/readview.jade');
});

/**
 *  @description Route for delete User
 **/
router.get('/delete/:id', function (req, res) {
    var query_object = {_id: req.params.id};


        User.prototype.deleteUserById(query_object, function (result) {

            /**
             * the result param is what returns the MongoDb after deletion
             * It has an subobject that can be accessed with result.result with 2
             * properties: "ok" and "n"
             * In order to be everythink ok, the ok and n must be equal like this:
             * result: { ok: 1, n: 1 }
             *  */


            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({message: "You deleted the user " + req.params.id + " successfully. Teoretically."}));


        });

});





module.exports = router;
