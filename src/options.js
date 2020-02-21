const fs= require("fs")
const pathfs= process.argv[2]

fs.readFile(pathfs ,"utf-8",(err,data)=>{
    if (err){
        return (err)
   } 
     console.log(data)
   })
 
 

