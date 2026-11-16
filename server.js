const express = require("express");
const app = express();
const logger = require("./middleware/logger");
const ticketRoutes = require("./routes/ticketRoutes");
app.use(express.json());
app.use(logger);
app.use("/tickets",ticketRoutes);
app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});