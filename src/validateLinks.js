
const arrayreadFile= require (`./readFile`)
const fetch = require('node-fetch');
const pathfs= process.argv[2]

const verifyLinks = async (arrayLinks) => {
    // let validLinks=[];
    // let wrongLinks=[];
    const promises = arrayLinks.map( async url => {
      try{
      const  statusUrl = await fetch(url)
      if(statusUrl.status < 400){
          let validLink = ("Link valido " +url)
      // validLinks.push( statusUrl.url)
       return validLink
      } else {
       // let wrongLink = ("Link invalido" +url)
       // return wrongLink
      //wrongLinks.push( statusUrl.url)
     }
      } catch (error){
          let wrongLink= ("Link invalido " +url)
          return wrongLink
        //console.error('No se encontro la IP: '+ url);
      }
 } )
 return Promise.all(promises)
}
module.exports = verifyLinks;
