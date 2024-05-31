import multer from "multer";


const upload=multer({dest:"uploads/"});
const uploader={
    
    path: "/api/upload",
    method: "post",
    middleware: upload.single("file"),
    handler: async (req, res) => {
        // upload.single("file");
         console.log(req.body);
        console.log(req.file);
    }
}
export default uploader;