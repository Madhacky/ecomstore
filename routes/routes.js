import resetPassword from "../controllers/auth/reset_password.js";
import userLogin from "../controllers/auth/userLogin.js";
import userSignup from "../controllers/auth/userSignup.js";
import addProduct from "../controllers/products/add_product.js";
import deleteProduct from "../controllers/products/delete_product.js";
import getAllBrandNames from "../controllers/products/get_all_brand_names.js";
import getAllProduct from "../controllers/products/get_all_product.js";
import getProductByid from "../controllers/products/get_product_by_ID.js";
import getProductByBrand from "../controllers/products/get_product_by_brand.js";
import updateProduct from "../controllers/products/update_product.js";
import uploader from "../controllers/products/upload.js";



export const routes = [
    userLogin,
    userSignup,
    resetPassword,
    addProduct,
    getProductByBrand,
    getProductByid,
    deleteProduct,
    updateProduct,
    getAllProduct,
    getAllBrandNames,
    uploader,

];
