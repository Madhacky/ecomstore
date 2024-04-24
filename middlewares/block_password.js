const  sanitizeResponse =(req, res, next)=> {
    const originalJson = res.json;

    // Override the json method of response object
    res.json = function(data) {
        // Check if data contains sensitive fields like password
        if (data && typeof data === 'object' && 'password' in data) {
            // If password field exists, remove it from the response object
            delete data.password;
        }
        // Call the original json method with the sanitized data
        originalJson.call(this, data);
    };

    next();
}
export default sanitizeResponse;