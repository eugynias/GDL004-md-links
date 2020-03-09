const verifyLinks = require (`./validateLinks.js`)
    let validLinks=[];
    let wrongLinks=[];

const arraystats = (Links) => {
   
    for (i=0; i<Links.length; i++)
    let statusLink = Links[i].split
    console.log(statusLink)
}
    




//     let validLinks=[];
//     let wrongLinks=[];
//     const promises = arrayLinks.map( async url => {
//     //  let validLinks=[];
//     //  let wrongLinks=[];
//       try{
//       const  statusUrl = await fetch(url)
//       if(statusUrl.status < 400){
//        return validLinks.push( statusUrl.url)
//       } else {
//         return wrongLinks.push( statusUrl.url)
//       }
//       } catch (error){
//         console.error('No se encontro la IP: '+ url);
//       }
//  } )
//  return Promise.all(promises)
// }
// module.exports = verifyLinks;