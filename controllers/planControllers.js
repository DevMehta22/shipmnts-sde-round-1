const planSchema = require('../models/planSchema');
const PlanSchema = require('../models/planSchema')

const postPlan = async(req,res)=>{
    try{
        const data = req.body;
        await PlanSchema.create(data).then((data)=>{
            return res.status(200).json({plan_id:data.id,store_location:data.store_location,success:true,message:"Plan Created Successfully"})
        }).catch((error)=>{
            console.log(error)
            return res.status(400).json({success:false,message:"Error creating plan"})
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:error.message})
    }
    const data = req.body; 
}


const getPlan = async(req,res)=>{
    try{
        const plan_id = req.params.plan_id;
        const plan = await planSchema.findById(plan_id)
        if(plan){
            return res.status(200).json({plan:plan})
        }else{
            return res.status(400).json({success:false,message:"Plan not found"})
        }

    }catch(error){
        console.log(error)
        return res.status(500).json({success:false,message:error.message})
    }
}

module.exports = {postPlan,getPlan}