//businessContact.js Wai Tung Wong 301222578 2022-10-21

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let contactController = require('../controllers/businessContact');
//helper function for guard purposes
function requireAuth(req,res,next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

//GET ROUTE for the contact list page - READ OPERATION
router.get('/',requireAuth,contactController.displayContactList);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,contactController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,contactController.processAddPage);

/*GET Route for displaying the Update page - UPDATE operation*/
router.get('/update/:id',requireAuth,contactController.displayUpdatePage);
/*POST Route for processing the Update page - UPDATE operation*/
router.post('/update/:id',requireAuth,contactController.processUpdatePage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,contactController.performDelete);
module.exports = router;