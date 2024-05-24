const express = require("express")
const app = express()
app.use(express.json())

const AuthRoutes = require("./Routes/AuthRoutes")

const dotenv = require("dotenv")
dotenv.config()

require("./Db/DbConnection") 

app.use("/api/auth", AuthRoutes)




const port = process.env.PORT
app.listen(port, ()=>{
    console.log("server running on " + port)
})




