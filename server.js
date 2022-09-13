console.log(".")
const express  = require("express")
const path     = require("path")
let   app      = express()

//passing file
const flatfile = (require("flat-file-db")("./data.db"))

//passing database into the wrapper
let   db       = require("then-flat-file-db")(flatfile) 

// automagically grabs the ROOT folder
global.__basedir = __dirname

//anytime we grab css or things, it pulls from public. 
app.use(express.static("public"))
//whenever data is passed, it's url encoded - weird symbols are taken care of
app.use(express.urlencoded({extended:true}))
//whenever data is sent, use json. gotta have those extra parenths.
app.use(express.json())

const homeroutes = require("./routes/home")
const taskroutes = require("./routes/tasks")

//Point incoming traffic to the homeroute controller
app.use("/",homeroutes)
//app.use("/tasks",taskroutes)

app.listen(3000,()=>{
    console.log("You're on Port 3000, AHOY!")
})