const myMiddleware=async (req, res, next) => {
    console.log("myMiddleware");
    next();
}
export default myMiddleware;