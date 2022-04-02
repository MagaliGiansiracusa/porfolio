const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const mainRouter = require("./routers/main");


app.use(express.static(path.join(__dirname, "public")));
app.use("/", mainRouter);

app.listen(PORT, ()=>{
    console.log("Server running ${PORT}");
});


app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/views/about.html")
})

