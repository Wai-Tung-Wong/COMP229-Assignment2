let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
//let Book = require('../model/books');
let BusinessContact = require('../model/businessContact');

module.exports.displayContactList = (req,res,next)=>{
    BusinessContact.find((err,businessContact)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         res.render('businessContact/list', 
         {title:'Contacts', BusinessContact:businessContact,
        displayName:req.user ? req.user.displayName:''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('businessContact/add',{title:'Add Contact',
    displayName:req.user ? req.user.displayName:''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newContact = BusinessContact({
        "name": req.body.name,
        "number":req.body.contactNumber,
        "email":req.body.email
    });
    BusinessContact.create(newContact,(err,BusinessContact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/businessContact');
        }
    });
    }
    
        module.exports.displayUpdatePage = (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.findById(id,(err,contactToUpdate)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('businessContact/Update',{title:'Update Contact', contact: contactToUpdate,
                    displayName:req.user ? req.user.displayName:''});
                }
            
            });
        }

        module.exports.processUpdatePage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedContact = BusinessContact({ //Need to update the following
                "name": req.body.name,
                "number":req.body.contactNumber,
                "email":req.body.email
            });
            BusinessContact.updateOne({_id:id}, updatedContact,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContact');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContact');
                }
                
            });
            }
        