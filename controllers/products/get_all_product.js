import productModel from "../../models/product.js";

const getAllProduct = {
    path: "/api/products/getAllProducts",
    method: "get",
    handler: async (req, res) => {
        try {
            let pageNumber =Number(req.query.pageNumber);
            let pageSize =Number(req.query.pageSize) ;
            let skip=(pageNumber-1)*pageSize;
            const products = await productModel.find().skip(skip).limit(10);
            return res.status(200).json({ message: "success", products: products });
        } catch (error) {
            return res.status(500).json({ message: "error", error: error });
        }

    }
}

export default getAllProduct;