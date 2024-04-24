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
const jwtTokenVerifyer = (val) => {
    const tokenValidation = val
    const token = jwt.verify(tokenValidation, process.env.JWT_SECRET,)
    return token;
}

export { jwtTokenGenerator, jwtTokenVerifyer }