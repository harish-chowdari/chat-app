const UserModel = require("../Models/UserModel")



async function signUp(req,res) {

    try
    {
        const {fullName,username,password,gender,profilePic} = req.body

        const userData = await new UserModel({
            fullName,
            username,
            password,
            gender,
            profilePic
        })

        const d = await userData.save()
        return res.json(d)

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


