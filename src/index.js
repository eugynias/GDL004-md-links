
const readFile= require ('./readFile.js')
const statusLinks = require (`./validateLinks.js`)
const getStats= require (`./stats.js`)
//const options = process.argv [3]
const pathfs= process.argv[2];

module.exports.mdLinks= (pathfs,options={validate:false,stats:false})=>{
    return new Promise ((resolve,reject)=>{
       readFile(pathfs)
       .then ((text)=>{
           let links = statusLinks(text, pathfs)
           return links
        
       })
       .then ((links)=>{
           let stats={}
         //console.log(options.validate,options.stats)
        if(options.validate && options.stats){
            stats=getStats(links)
            console.log(links,stats)
            
        }
          else if(options.validate && options.stats){
            console.log(links)
          }
            else if (options.validate){
              // console.log(links)
               resolve(links)
            }
             else if(options.stats){
              stats=getStats(links)
               //console.log(stats)
               resolve(stats)
             }
           
         //resolve(links,stats)
        })
        .catch((err) => {
            reject(err)
        }
        )
        
       })
      
        }
        //Ojo ...se pueden utilizar varios resolve
    //return mdLinks();
//         Ejemplo de RESOLUCION CON ASYNC
// module.exports = async function mdLinks() {
//     console.log('funcion por defecto')
//     return null;
//     const pathfs= process.argv[2];
//        let arrayLinks = await readFile(pathfs)
//        let links = await Promise.all(statusLinks(arrayLinks));
//        let validateLinks= getStats(links)
//      if (options === "--validate--stats"){
//          console.log(links,validateLinks)
//      }
//     else if(options === "--stats"){
//         console.log(validateLinks)
//     }
//     else if(options== "--validate"){
//        console.log(links)
//     }else {
//            console.log(arrayLinks)
//        }
   
//     }

// //   return mdLinks();


