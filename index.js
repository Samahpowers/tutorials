const { error } = require("console")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname,'02TUT','sarter.txt'),"utf8", (err, data)=>{
    if(err) throw error
   // console.log(data.toLocaleString())
   console.log(data)
})
fs.writeFile(path.join(__dirname, '02TUT', 'write,txt'), "fs write file", err =>{
if(err) throw error
console.log("Operation complete: Text written")
})
console.log("Hello world")
// Exit on uncaught errors

process.on("uncaughtException", err=>{
    console.log("The Error is : ", err);
    process.exit(1)
})