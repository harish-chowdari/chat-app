const UserModel = require("../Models/UserModel")
const bcrypt = require("bcryptjs")


async function signUp(req,res) {

    try
    {
        const {fullName,username,password, confirmPassword,gender,profilePic} = req.body

        if(password !== confirmPassword)
            {
                return res.json("passwords are not matching")
            }

        const userExist = await UserModel.findOne({username})
        if(userExist)
            {
                return res.json({msg : "user already exist"})
            }

            const salt = await bcrypt.genSalt(10)
            const hassPassword = await bcrypt.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        
        const newUser = await new UserModel({
            fullName,
            username,
            password : hassPassword,
            gender,
            profilePic : gender === "male" ? boyProfilePic : girlProfilePic  
        })

        if(newUser)
            {

                await newUser.save()
                return res.json({
                    fullName : newUser.fullName,
                    username : newUser.username,
                    profilePic: newUser.profilePic 
                })
            }
        else
        {
            return res.json({msg : "invalid data"})
        }
    }


    catch(err)
    {
        console.log(err)
    }
}



async function logIn(req,res) {
    console.log("login")
}






module.exports = {
    signUp,
    logIn
}


