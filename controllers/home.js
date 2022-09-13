//set up homepage
const path = require("path")
let homepage = "views/home.html"

module.exports = {
    renderhome: (req,res)=>{
        res.sendFile(path.join(__basedir,homepage))
    }
}