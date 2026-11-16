function logger(req,res,next){
    console.log("Method:",req.method);
    console.log("URL:",req.originalUrl);
    console.log("Time:",new Date().toISOString());
    next();

}

module.exports = logger;