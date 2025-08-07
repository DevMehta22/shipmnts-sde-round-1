const mongoose = require('mongoose')

const PlanSchema = new mongoose.Schema({
    store_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Store',
        required:true
    },
    valid_from:{
        type:Date,
        required:true
    },
    valid_to:{
        type:Date,
        required:true
    },
    items:[
        {
            category:{
            type:String,
            required:true,
            },
            name:{
                type:String,
                required:true,   
            },
            half_price:{
                type:Number,
                required:true
            },
            full_price:{
                type:Number,
                required:true
            },
            extra_charge:{
                type:Number,
                required:true
            }
    }
    ]
},{timestamps:true})

module.exports = mongoose.model('Plan',PlanSchema);

