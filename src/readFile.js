const fs= require("fs")
const pathfs= process.argv[2]

 module.exports = (pathfs,callback)=> {
 fs.readFile(pathfs ,"utf-8",(err,data)=>{

    if (!err){
        const expression = /(https?:\/\/[^\s]+)/g;
        const regex = new RegExp(expression);
         const links = data.match(regex);
        return callback(null,links)
   } else {
        //console.error(error.message);
        callback(err)
      }
     //callback(error)
   })
 }
 