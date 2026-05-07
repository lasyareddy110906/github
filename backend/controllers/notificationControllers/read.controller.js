import {NotificationModel} from "../../models/NotificationModel.js"

export const readNotifications=async (req,res)=>{
    try{
        const uid=req.user?.id || req.user?._id
        if(!uid){
            return res.status(400).json({message:"User ID not found in request"})
        }
        
        const notifications=await NotificationModel.find({user:uid}).sort({createdAt:-1})
        const unreadNotifications=notifications.filter(notif=>!notif.read)
        const unreadIds=unreadNotifications.map(notif=>notif._id)
        await NotificationModel.updateMany({_id:{$in:unreadIds}},{$set:{read:true}})
        const updatedNotifications=await NotificationModel.find({user:uid}).sort({createdAt:-1})

        res.status(200).json({message:"notifications marked as read successfully",payload:updatedNotifications})
    }
    catch(err){
        console.log("error in getting notifications",err)
        res.status(500).json({message:"error in getting notifications"})
    }
}