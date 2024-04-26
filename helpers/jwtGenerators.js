import jwt, { decode } from 'jsonwebtoken';

// sets the token
const jwtTokenGenerator = (userData) => {
    const { email } = userData
    const expirationTime = Math.floor(Date.now() / 1000) + (15 * 60);
    console.log(expirationTime);
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: expirationTime });
    return token;
}

// verifys the user token
const jwtTokenVerifyer = (req, res) => {
    try {
        const token = req.headers.authorization;

        const tokenValidation = token.split("Bearer ")[1]
        const verifyToken = jwt.verify(tokenValidation, process.env.JWT_SECRET,);
        console.log("token", verifyToken);
        return true;
    } catch (error) {
        return false;
    }

}

export { jwtTokenGenerator, jwtTokenVerifyer }