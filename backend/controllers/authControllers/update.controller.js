import {userModel} from '../../models/UserModel.js';

export const updateController = async(req,res)=>{
    try
    {

    }
    catch(err)
    {
        return res.status(500).json({message:"User Update failed",error:err})
    }
}