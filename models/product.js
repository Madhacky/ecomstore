import mongoose from "mongoose";
const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: String,
    quantity: Number,
    brand:String,
    createdAt: {
        type: Date,
        default: new Date()

    },
}
);



const productModel = mongoose.model("products", productSchema);
export default productModel;