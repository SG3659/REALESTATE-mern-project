import User from "../model/user.js";
import bcryptjs from "bcryptjs";
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
