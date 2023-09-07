const   express = require("express")
const   mongoose = require("mongoose")
const   morgan = require("morgan")
const   router = require("./routes/authrouter")
const   eventrouter = require("./routes/eventroute")
const   cors = require("cors")
const formidable_express = require("express-formidable")

const   dotenv = require("dotenv")
const   jsonwebtoken = require("jsonwebtoken")
const DBconnect = require("./mongomodels/Db.js")


const   server = express()
server.use(express.json())
server.use(cors())
DBconnect()
server.use(formidable_express());

dotenv.config();
server.use("/api/v1/auth", router)
server.use("/api/v1", eventrouter)



server.listen(1000, ()=>{
    console.log("Server Listening")
})


