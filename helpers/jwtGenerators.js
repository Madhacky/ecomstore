import jwt from 'jsonwebtoken';

// sets the token
const jwtTokenGenerator  = (userData) =>{
    const {email} = userData
    const token = jwt.sign({email},process.env.JWT_SECRET ,{expiresIn:"1day"});
    return token;
}

// verifys the user token
const jwtTokenVerifyer = (req,res,next) =>{
    const token  = jwt.verify(user,process.env.JWT_SECRET )
    return token;
}

export  {jwtTokenGenerator,jwtTokenVerifyer}