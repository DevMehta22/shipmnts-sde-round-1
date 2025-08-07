const express = require("express")
const mongoose = require('mongoose')
const StoreSchema = require('../models/storeSchema')

const postStore = async(req,res)=>{
    try{const {store_location,  currency,tax_percentage,premium_items} = req.body;
    if(!store_location || !currency || !tax_percentage || !premium_items){
        return res.status(400).json({success:"false",message:"Invalid request body"});
    }
    const storeExists = await StoreSchema.findOne({store_location:store_location});
    if(storeExists){
        return res.status(400).json({success:"false",message:"Store with this location already exists"});
    }
    await StoreSchema.create({
        store_location:store_location,
        currency:currency,
        tax_percentage:tax_percentage,
        premium_items:premium_items
    }).then(()=>{
        return res.status(201).json({success:"true",message:"Store Created Successfully"})
    }).catch((error)=>{
        console.log(error);
        return res.status(500).json({success:false,message:"Error Creating Store"})
    })}catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:error.message})
    }
}


const updateStore = async(req,res)=>{
    try{
        const data = req.body;
        const location = req.params.store_location;
        const storeExists = await StoreSchema.findOne({store_location:location})
        if(!storeExists){
            return res.status(404).json({status:false,message:"Store not found"})
        }
        await StoreSchema.findByIdAndUpdate(storeExists.id,data,{new:true}).then(()=>{
            return res.status(200).json({success:true,message:'Store Updated Successfully'})
        }).catch((error)=>{
            console.log(error)
            return res.status(400).json({success:false,message:"Error updating store"})
        })
        
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:error.message});
    }
}

module.exports = {postStore,updateStore}