const mongoose = require('mongoose')

const StoreSchema = new mongoose.Schema({
    store_location:{
        type:String,
        required:true
    },
    currency:{
        type:String,
        required:true
    },
    tax_percentage:{
        type:Number,
        required:true
    },
    premium_items:{
        type:Array,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Store',StoreSchema);