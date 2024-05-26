const jwt = require("jsonwebtoken")
const UserModel = require("../Models/UserModel")


const protectRoute = async(req,res, next) => {

    try
    {
        const token = req.cookies.jwt

        if(!token)
            {
                return res.json({msg: "please provide token"})
            } 

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(!decoded)
            {
                return res.json({msg: "invalid token"})
            }
        
        const user = await UserModel.findById(decoded.userId).select("-password")
       if(!user)
        {
            return res.json({msg: "user not found"})
        }

         req.user = user
        next()
        
        

    }

    catch(err)
    {
        console.log(err)
    }

}


module.exports = protectRoute