import { jwtTokenVerifyer } from "../../helpers/jwtGenerators.js";
import productModel from "../../models/product.js";

const getProductByBrand = {
    path: "/api/product/getProductByBrand",
    method: "get",
    handler: async (req, res) => {
        try {
            const brandName = req.query.brandName;
            const _jwt = req.headers.authorization;
            console.log("token: ",_jwt)
            const token = jwtTokenVerifyer(_jwt)
            console.log("token",token)
            if (!brandName) {
                return res.status(400).json({ message: "Please enter brand name" })
            }
        
            const foundItem = await productModel.find({ brand: brandName });
            if (foundItem.length==0) {
                return res.status(404).json({ message: "No product found with this brand" })
            }
    
            res.status(200).json({ products: foundItem })
        } catch (error) {
            return res.status(500).json({ message: "Please check token" })
        }
       
    }
}

export default getProductByBrand