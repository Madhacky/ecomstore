import resetPassword from "../controllers/auth/reset_password.js";
import userLogin from "../controllers/auth/userLogin.js";
import userSignup from "../controllers/auth/userSignup.js";
import addProduct from "../controllers/products/add_product.js";
import getProductByid from "../controllers/products/get_product_by_ID.js";
import getProductByBrand from "../controllers/products/get_product_by_brand.js";

export const routes = [
    userLogin,
    userSignup,
    resetPassword,
    addProduct,
    getProductByBrand,
    getProductByid,
]