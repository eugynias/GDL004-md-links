
const readFile= require ('./readFile.js')
const statusLinks = require (`./validateLinks.js`)
const getStats= require (`./stats.js`)
const validLinks= require (`./validate.js`)
const options = process.argv [3]

async function mdLinks() {
    
    const pathfs= process.argv[2];
       let arrayLinks = await readFile(pathfs)
       let links = await Promise.all(statusLinks(arrayLinks));
     if (options === "--validate"){
         console.log(links)
     }
    else if(options === "--stats"){
        let validateLinks= getStats(links)
        console.log(validateLinks)
       }else {
           console.log("error")
       }
   
    }

  return mdLinks();
