import productModel from "../../models/product.js"
const addProduct={
    path:'/api/product/addProduct',
    method:"post",
    handler:async (req,res)=>{
        try {
            const {name,description,price,image,quantity,brand}=req.body;
            if(!name||!description||!price||!image||!quantity||!brand){
                return res.status(400).json({message:"All fields are required"})
            }

           
            const product =await productModel.findOne({brand:brand,name:name});
            if(product){
                res.status(401).json({messgae:"Product already exist"});
                return
            }

            const newProduct=new productModel({
                name,
                description,
                price,
                image,
                quantity,
                brand
            });

          await  newProduct.save();
          res.status(201).json({message:"Product added successfully","product":newProduct});
        } catch (error) {
            res.status(500).json({message:"Internal Server Error"}); 
        }
    }

}

export default addProduct;