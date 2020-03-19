const fs= require("fs")
const pathfs = process.argv[2]

 const readFile = (pathfs) => {
     return new Promise ((resolve,reject)=>{
            fs.readFile(pathfs ,"utf-8",(err,data)=>{
                if (!err){
                    let total = [];
                    const expression = /\[(.*)\]\((http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))\)/gm;
                      let expreg = /\[(.*)\]\((.*)\)/;       
                        const regex = new RegExp(expression);
                            const links = data.match(regex);
                               for (i = 0; i < links.length; i++) { 
                                let separar = expreg.exec(links[i]); 
                                let result = {
                                  texto: separar[1],
                                  href: separar[2],
                                  file: pathfs
                                }
                                total.push(result)}
                           resolve (total)
                }else {
                
                    reject (err)
                }     
            });
    });
}
module.exports = readFile;
