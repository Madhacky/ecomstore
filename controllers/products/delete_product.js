import { jwtTokenVerifyer } from "../../helpers/jwtGenerators.js";
import productModel from "../../models/product.js";

const deleteProduct = {
    path: "/api/products/deleteProduct",
    method: "delete",
    handler: async (req, res) => {
        const token = jwtTokenVerifyer(req, res);
        if (!token) {
            return res.status(401).json({ message: "unauthorized" });
        } else {
            try {
                const id = req.query.id;
                console.log(id);
                const product = await productModel.findOneAndDelete({_id:id});
                if (!product) {
                 return   res.status(400).json({ "message": "product not found or invalid product id" });
                }
              return  res.status(200).json({ "message": "deleted successfully", product });
            } catch (error) {
                res.status(500).json({ message: "error", error });
            }
        }


    }
}

export default deleteProduct;