const express = require("express");
const app = express();
const port = 8080;
const ejsMate = require("ejs-mate");
const path = require("path");

//set view engine
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

//ejs-mate
app.engine("ejs",ejsMate);

//set static folders
app.use(express.static(path.join(__dirname,"public")));













//main page
app.get("/",(req,res)=>{
    res.render("index")
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});
