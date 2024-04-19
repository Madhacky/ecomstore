import mongoose from "mongoose";
mongoose.set('strictQuery', false);
let Db
const initializeConnection =  async () =>{
    try {
        Db =await  mongoose.connect(process.env.DB_URL,{})
        return Db
    } catch (error) {
        console.log(`A err has accured`,error)
    }
}

export const getCollectionName =  (dbname) =>{
    const collection =  Db.connection.db.collection(dbname);
    return collection;
}

export default initializeConnection

