import { getCollectionName } from "../../helpers/db_connection.js";
import bcrypt from 'bcrypt';
import { jwtTokenGenerator } from "../../helpers/jwtGenerators.js";



const userLogin = {
    path:'/api/login',
    method:'post',
    handler:async (req,res)=>{
      try {
        const {email,password} = req.body;
        console.log(req.body);
        const collectionName = await getCollectionName('users');
        const collection =  await collectionName.findOne({email});  
        const passwordHash = collection['password'];  
        const isValid = await bcrypt.compare(password,passwordHash);
        if(isValid){
            const token = jwtTokenGenerator(req.body)
            console.log(token)
            res.cookie('token',token).status(200).json({messgae:"success",token:token})
        }
        else{
            res.status(400).json({message:"Please Provide a valid Password"})
        }
      } catch (error) {
        console.log(error)
      }
    }       
}

export default userLogin