import User from "../model/user.js";
import bcryptjs from "bcryptjs";
import { errorhandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
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
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorhandler(404, "user not found"));

    const validpass = bcryptjs.compareSync(password, validUser.password);
    if (!validpass) return next(errorhandler(404, "Already exists"));

    const token = jwt.sign({ id: validUser._id }, "hillo!@#$#@guys");
    //res.cookie('access_token',token,{httpOnly:true , expires:new Date(Date.now())+24*60*60*1000})
    const { password: pass, ...rest } = validUser._doc;// not sending pass to user
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
