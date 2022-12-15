const express=require('express');
const router=express.Router();
const ListModel=require('../models/list.model')

// Getting the list of items
router.get('/',async(req,res)=>{
    let listItems=await ListModel.find();
    try{
        res.json({message:'success',response:listItems})
    }catch(e){
        res.status(500).json({message:'error',response:e.message})
    }
})
// Adding a new item to the list
router.post('/newitem',async(req,res)=>{
    let {title,quantity,priority,description}=req.body;
    try{
        let newItem=await ListModel.create({title,quantity,priority,description});
        res.json({message:'success',response:newItem})
    }catch(e){
        res.status(500).json({message:'error',response:e.message})
    }
})
// Deleting an item
router.delete('/:id',async(req,res)=>{
    let {id}=req.params;
    const item=await ListModel.findByIdAndDelete({_id:id});
    try{
        res.json({message:'success',response:item})
    }catch(e){
        res.status(500).json({message:'error',response:e.message})
    }
})
// Bookmarking and Not Bookmarking
router.put('/:id',async(req,res)=>{
    let {id}=req.params;
    const updatedData=req.body;
    const updatedItem=await ListModel.updateOne({_id:id},{$set:updatedData});
    try{
        res.json({message:'success',response:updatedItem})
    }catch(e){
        res.status(500).json({message:'error',response:e.message})
    }
})
module.exports=router;