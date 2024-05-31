import { jwtTokenVerifyer } from "../../helpers/jwtGenerators.js";
import productModel from "../../models/product.js";

const getProductByBrand = {
    path: "/api/product/getProductByBrand",
    method: "get",
    handler: async (req, res) => {
       // const token = jwtTokenVerifyer(req, res);
       // if (!token) {
        //    return res.status(401).json({ message: "unauthorized" });
      //  } else {
            try {
                const brandName = req.query.brandName;

                //console.log("token", token)
                if (!brandName) {
                    return res.status(400).json({ message: "Please enter brand name" })
                }

                const foundItem = await productModel.find({ brand: brandName });
                if (foundItem.length == 0) {
                    return res.status(404).json({ message: "No product found with this brand" })
                }

                res.status(200).json({ products: foundItem })
            } catch (error) {
                return res.status(500).json({ message: "internal server error" })
            }
      //  }


    }
}

export default getProductByBrand