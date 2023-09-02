const JWT = require( "jsonwebtoken")
const UserAuth = require( "../mongomodels/UserAuth")

//using the token to authenticate, some routes are to be accessed only if the middlewares is checked
const requireSignin = async (req,res,next) =>{
    
    const {token} = req.headers.authorization
    //try req.headers.authorization
    try{ 
        //so this decode actually stores data of whole user
    const decode = JWT.verify(req.headers.authorization, 'HGFHGEAD1212432432')
    req.user = decode
    next()}
    catch(err){
        console.log(err)
  }
}
module.exports = {requireSignin}