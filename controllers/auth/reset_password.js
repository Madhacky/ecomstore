import otpGenerator from "../../helpers/otp_generator.js";
import usermodel from "../../models/user.js";
import bcrypt from "bcrypt";
const resetPassword = {
    path: "/api/user/resetPassword",
    method: "put",
    handler: async (req, res) => {
        const { id, newPassword,otp } = req.body;
        if (!id || !newPassword || !otp) {
            return res.status(401).json({ message: "pls enter new password" });
        }
        // const currentOtp=otpGenerator();
        // console.log(currentOtp);
        // if(currentOtp!=otp){
        //     return res.status(401).json({ message: "Invalid Otp"});
        // }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        const user = await usermodel.findByIdAndUpdate(id, { password: hashedPassword });
        if (!user) {
            return res.status(401).json({ message: "user not found"});
        }
        return res.status(200).json({ message: "password updated" });
    }

}

export default resetPassword;