import productModel from "../../models/product.js";

const getAllBrandNames={
    path:"/api/products/getAllBrandNames",
    method:'get',
    handler:async(req,res)=>{
     //   const brandName=req.query.brandName;
        const brandNames=await productModel.aggregate([{$group:{_id:null,brandNames:{$addToSet:"$brand"}}},{$project:{_id:0,brandNames:1}}]);
        console.log(brandNames);
        res.status(200).json(brandNames);
    }
}


export default getAllBrandNames;