import jwt from "jsonwebtoken";
import {config} from "dotenv";
const {verify} = jwt;
config();

export const verifyToken = (req, res, next) => {
    try{
        //get token from cookies
    const token = req.cookies?.token;
    //check if token exists
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }
    let decodedToken=verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
}
catch(err)
{
    return res.status(401).json({message: "Invalid token",error:err})
}
}