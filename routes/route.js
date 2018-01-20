const express = require('express');
const router = express.Router();
const contact = require('../models/contacts');
//retrieve data
router.get('/contacts',(req,res,next)=>{
contact.find(function(err,contacts){
        res.json(contacts);
});
});
//add contact
router.post('/contact',(req,res,next)=>{
        let newcontact = new contact({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                phone:req.body.phone
        });
        newcontact.save((err,contact)=>{
        if(err)
{
        res.json({msg:'failed to add contact'});
}
        else{
                res.json({msg:'contact added succesfully'});
        }
});
});
//del contact
router.delete('/contact/:id',(req,res,next)=>{
contact.remove({_id:req.params.id},function(err,result){
        if(err){
                        res.json(err);
        }
        else{
                res.json(result);
        }
});
});
module.exports = router;