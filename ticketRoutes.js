const express = require("express");
const router = express.Router();
const validateTicket = require("../middleware/validateTicket");
let tickets = [];
let id =1;
router.post("/",validateTicket,(req,res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const priority = req.body.priority;

    const tick = {
        id:id,title,description,priority
    };
    tickets.push(tick);
    id++;
    res.status(201).send(tickets);
});

router.get("/",(req,res)=>{
    res.send(tickets);
});

router.get("/:id",(req,res)=>{
    const tick = tickets.find(t => t.id === Number(req.params.id));
    if(!tick){
        return res.status(404).send("ticket not found");
    }
    res.send(tick);

});
router.put("/:id",(req,res)=>{
    const tick = tickets.find(t => t.id === Number(req.params.id));
    if(!tick){
        return res.status(404).send("ticket not found");
    }
    tick.title =req.body.title;
    tick.description = req.body.description;
    tick.priority = req.body.priority;
    res.send(tick);
});

router.delete("/:id",(req,res)=>{
    const i =tickets.findIndex(t => t.id === Number(req.params.id));
    if(i === -1){
        return res.status(404).send("ticket index not found");
    }
    tickets.splice(i,1);
    res.send("ticket deleted ");
});

module.exports = router;