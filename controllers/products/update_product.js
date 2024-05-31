import productModel from "../../models/product.js";

const updateProduct={
    path:"/api/products/updateProduct",
    method:"put",
    handler:async(req,res)=>{
        try {
            const {id,quantity,price,image}=req.body;
            if(!id){
                return res.status(400).json({message:"id is required"});
            }
            if(price<=0||quantity<0){
                return res.status(400).json({message:"enter valid price or quantity"});
            }
            if(image===""){
                return res.status(400).json({message:"enter valid image link"});
            }
            const product=await productModel.findByIdAndUpdate({_id:id},{quantity,price,image},{new:true});
            return res.status(200).json({message:"updated sucessfully",product});       
        } catch (error) {
        
            return res.status(500).json({message:"error",error});
        }
       
     
    }
}

export default updateProduct;