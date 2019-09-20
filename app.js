const express = require("express");
const app = express();
const port = 8080;

//get route
const postRoutes = require('./route/post')
app.use("/",postRoutes);

app.listen(port,()=>{
    console.log(`listen from: ${port}`)
});