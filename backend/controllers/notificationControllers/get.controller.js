import {NotificationModel} from "../../models/NotificationModel.js"

export const getNotifications=async (req,res)=>{
    try{
        const uid=req.user?.id || req.user?._id
        const notifications=await NotificationModel.find({user:uid}).sort({createdAt:-1})
        res.status(200).json({message:"notifications fetched successfully",payload:notifications})
    }
    catch(err){
        console.log("error in getting notifications",err)
        res.status(500).json({message:"error in getting notifications"})
    }
}