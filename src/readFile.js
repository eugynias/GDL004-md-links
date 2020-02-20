const fs= require("fs")


module.exports = function (pathfs,callback) {
    fs.readFile(pathfs ,"utf-8",(error,data)=>{
    
    //console.log(data)
    if (error){
        return callback(error)
    } 

    callback(null,data)
    })
}

