
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import initializeConnection from './helpers/db_connection.js'
import { routes } from './routes/routes.js';
import myMiddleware from './middlewares/my_middleware.js';
import uploader from './controllers/products/upload.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({
    extended:true,
}))
app.use(express.json());

// app.use(sanitizeResponse);

routes.forEach((route) =>{

    app[route.method](route.path,route.handler)
})

initializeConnection().then(() =>{
    console.log("db connected ")
    app.listen(process.env.PORT || 3000, () => {
        console.log(`server running on port http://localhost:${process.env.PORT}`);
    });
}).catch((err) =>{
    console.log(err)
})

