function validateTicket(req,res,next){
    const title = req.body.title;
    const description = req.body.description;
    const priority = req.body.priority;

    if(!title || title.trim() === ""){
        return res.status(400).send("title is required");
    }
    if(!description || description.trim() === ""){
        return res.status(400).send("description is required");
    }
    
if(priority !== "low" && priority !== "medium" && priority !== "high"  ){
        return res.status(400).send("Invalid priority");
    }

    next();
}
module.exports = validateTicket;