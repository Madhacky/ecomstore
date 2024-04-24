
import usermodel from "../../models/user.js";
import bcrypt from 'bcrypt';


const userSignup = {
  path: "/api/signup",
  method: "post",
  handler: async (req, res,next) => {
    try {
      const { email, name, mobile, password } = req.body;
      if (!name || !password || !email || !mobile) {
        res.status(401).json({ messgae: "Please provide the values" });
        return
      }
      const user = await usermodel.findOne({ email });
      if (user) {
        res.status(401).json({ messgae: "user already exist" });
        return
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new usermodel({
        name,
        password: hashedPassword,
        email,
        mobile,
      });
     

      await newUser.save();
      const responseUser= {
        id:newUser  ._id,
        name:newUser.name,
        email:newUser.email,
        mobile:newUser.mobile
      }

      res.status(201).json({ message: "user created successfully", user: responseUser });
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: "Internal Server Error" });
    }

  }
}

export default userSignup;