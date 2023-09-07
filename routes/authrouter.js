const  express = require("express")
const  router = express.Router()
const  {registerController, loginController} = require("../controllers/authcontroller")
//sign in
router.post("/register", registerController )
//login
router.post("/login", loginController)


module.exports= router 
