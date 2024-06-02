const UserModel = require("../Models/UserModel")
const bcrypt = require("bcryptjs")
const generateToken = require("../Utils/GenerateToken")



async function signUp(req,res) {

    try
    {
        const {fullName,userName,password, confirmPassword,gender,profilePic} = req.body

        if(password !== confirmPassword)
            {
                return res.json("passwords are not matching")
            } 

        const userExist = await UserModel.findOne({userName})
        if(userExist)
            {
                return res.json({exist : "user already exist"})
            }


            const salt = await bcrypt.genSalt(10)
            const hassPassword = await bcrypt.hash(password, salt)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`;


        
        const newUser = await new UserModel({
            fullName,
            userName,
            password : hassPassword,
            gender,
            profilePic : gender === "Male" ? boyProfilePic : girlProfilePic  
        })

        if(newUser)
            {
                generateToken(newUser._id, res)
                await newUser.save()
                return res.json({
                    _id: newUser._id,
                    fullName : newUser.fullName,
                    userName : newUser.userName,
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

    try
    {
        const {userName, password} = req.body
        const user = await UserModel.findOne({userName})
        const isPassword = await bcrypt.compare(password, user ? user.password : "" )

        if(!user || !isPassword)
            {
                return res.json({notCorrect : "user credentials are not correct"})
            }

        generateToken(user._id, res);
        
        return res.json({
            _id:user._id,
            fullName: user.fullName,
            userName : user.userName,
            profilePic: user.profilePic        
            
        })
    }


    catch(err)
    {
        console.log(err)
    }
}


const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};



module.exports = {
    signUp,
    logIn,
    logout
}


