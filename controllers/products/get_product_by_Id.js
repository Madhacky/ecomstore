import productModel from "../../models/product.js";

const getProductByid={
    path:"/api/product/getProductById",
    method:"get",
    handler:async(req,res)=>{

        try {
            const id=req.query.id;
            if(!id){
                return res.status(400).json({message:"id is required"});
            }
            const product=await productModel.findById(id);
            if(!product){
                return res.status(400).json({message:"product not found"});
            }
            return res.status(200).json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"internal server error"});
        }
       
    }

}
export default getProductByid;