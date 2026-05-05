import { hash, compare } from 'bcrypt'
import { userModel } from '../../models/UserModel.js'
import jwt from 'jsonwebtoken'
const { sign } = jwt

import { config } from "dotenv";
config();

export const logoutController = async (req, res) => {
    try {
        //delete token from cookie storage
        res.clearCookie("token", {
            httpOnly: true,
            secure: false,
            sameSite: "lax"
        })
        res.status(200).json({ message: "Logut Success!!" })
    }
    catch (err) {
        res.status(500).json({ message: "Logout Failed!" })
    }
}