import {hash} from 'bcrypt';
import { userModel } from '../../models/UserModel.js';

export const registerController = async(req,res)=>{
    try
    {
        // get user data from req 
        const newUser = req.body

        // hash password
        newUser.password = await hash(newUser.password,12)

        // create new user
        const newUserDoc = new userModel(newUser)

        // save user
        await newUserDoc.save()

        return res.staus(201).json({ message: "User Registration Successful"})
    }
    catch(err)
    {
        return res.status(500).json({message:"User Registration failed",error:err})
    }
}