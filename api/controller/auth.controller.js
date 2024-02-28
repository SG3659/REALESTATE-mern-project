import User from "../model/user.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const haspass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: haspass });
  try {
    await newUser.save();
    res.status(201).json("user created successfully");
  } catch (error) {
    /*next(errorhandler(550,'error from the function'))*/
    next(error);
  }
};
export const signin =(req,res,next)=>{
  const {email,password}=req.body
  try{
    const validUser= await User.findOne({email,password})
    if(!validUser) return next(errorhandler(404,"user not found"))
    const validpass= 
  }
  catch(error){
    next(error)
  }
  
}
