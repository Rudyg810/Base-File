const   express  =require(   "express")
const { alleventcontroller, eventcontroller, createevent } = require("../controllers/eventcontroller")


const eventrouter = express.Router()

eventrouter.post("/create-event", createevent)

eventrouter.get("/single-event/:slug", eventcontroller)
eventrouter.get("/events", alleventcontroller)

module.exports = eventrouter