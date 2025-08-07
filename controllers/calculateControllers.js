const storeSchema = require("../models/storeSchema")
const planSchema = require("../models/planSchema")


const calculatePrice = async(req,res)=>{
    const {store_location,order_date,length,selections,extras} = req.body
    if(!store_location || !order_date || !length || !selections || !extras){
        return res.status(400).json({success:false,message:"Invalid request body"})
    }
    const store = await storeSchema.findOne({store_location:store_location})
    const plan = await planSchema.findOne({store_location:store_location})
    const totalPrice = 0;   

    if(plan && store){
        const endDate = plan.valid_to
        const date = new Date(order_date)
        if (date.getTime() > endDate.getTime()){
            return res.status(400).json({success:false,message:"Plan is expired"})
        }
        
        for(let item in plan.items){
        }
         

    }

}

module.exports = {calculatePrice}