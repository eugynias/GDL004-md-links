
const readFile= require ('./readFile.js')
const statusLinks = require (`./validateLinks.js`)
const getStats= require (`./stats.js`)
const options = process.argv [3]

module.exports = async function mdLinks() {
    console.log('funcion por defecto')
    return null;
    const pathfs= process.argv[2];
       let arrayLinks = await readFile(pathfs)
       let links = await Promise.all(statusLinks(arrayLinks));
       let validateLinks= getStats(links)
     if (options === "--validate--stats"){
         console.log(links,validateLinks)
     }
    else if(options === "--stats"){
        console.log(validateLinks)
    }
    else if(options== "--validate"){
       console.log(links)
    }else {
           console.log(arrayLinks)
       }
   
    }

//   return mdLinks();


