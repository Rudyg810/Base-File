const   express = require("express")
const   mongoose = require("mongoose")
const   morgan = require("morgan")
const   router = require("./routes/authrouter")
const   cors = require("cors")
const   dotenv = require("dotenv")
const   jsonwebtoken = require("jsonwebtoken")
const DBconnect = require("./mongomodels/Db.js")

const   server = express()
server.use(express.json())
server.use(cors())
DBconnect()
dotenv.config();
server.use("/api/v1/auth", router)




server.listen(1000, ()=>{
    console.log("Server Listening")
})


