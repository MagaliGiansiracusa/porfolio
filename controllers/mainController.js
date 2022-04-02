const path = require("path");

const mainController = {
    home: function (req,res){
        res.sendFile(path.join(__dirname, "../views/home.html"));
    },
    about: function (req,res){
        res.sendFile(path.join(__dirname, "../views/about.html"));
    }
}

module.exports= mainController;
