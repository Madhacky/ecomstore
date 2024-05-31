//import otpgenerator from 'otp-generator';


const otpGenerator = () => {
    //const otp=otpgenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false,digits:true });
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}
export default otpGenerator;