const UserAuth = require("../mongomodels/UserAuth")
const { comparePassword, hashPassword } = require("../utils/hashing")
const JWT = require("jsonwebtoken")

//registration
const registerController = async (req, res) => {
  try {
    const { name, email, password, phone} = req.body;
    //validations
    if (!name) {
      return res.send({ error: "nField is Required" });
    }
    if (!email) {
      return res.send({ message: "eField is Required" });
    }
    if (!password) {
      return res.send({ message: "pField is Required" });
    }
    if (!phone) {
      return res.send({ message: "phField is Required" });
    }

    //check user
    const exisitingUser = await UserAuth.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      console.log("User Exists")
      return res.status(200).send({
        success: true,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new UserAuth({
      name,
      email,
      phone,
      password: hashedPassword
        }).save();
    console.log("User Created")


    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};


//Login

const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("1")
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      console.log("2")

      //check user
      const user = await UserAuth.findOne({ email });
      if (!user) {
        return res.status(201).send({
          success: false,
          message: "Email is not registerd",
        });
      }      console.log("3")


      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      console.log("3")

      //token
      const token = await JWT.sign({ _id: user._id }, "HGFHGEAD1212432432", {

      });
      console.log("Login succesfully")
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          role: user.role        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(201).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };
  
  
  module.exports = {  registerController, loginController}