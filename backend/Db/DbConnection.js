const mongoose = require("mongoose")


module.exports = mongoose.connect(process.env.DB_URI)


const con = mongoose.connection


con.on("error", ()=>{
    console.log("error connecting db")
})


con.once("open", ()=>{
    console.log("db connected")   
})


