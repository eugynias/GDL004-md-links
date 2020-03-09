
//const pathfs= process.argv[2]
const readFile= require ('./readFile.js')
const verifyLinks = require (`./validateLinks.js`)
//const pathfs= process.argv[2];
//const options = process.argv [3]

async function mdLinks() {
    const pathfs= process.argv[2];
       let arrayLinks = await readFile(pathfs)
       //let Links = await verifyLinks(arrayLinks)
       console.log(arrayLinks)

    //    if (options === --validate){
    //        let validate = await validateFile(Links)
    //        if(options=== --stats){
    //            let stats =await stats()
    //        }
       }
       //
   
//}

 return mdLinks();
