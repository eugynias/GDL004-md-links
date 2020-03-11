
const arrayreadFile= require (`./readFile`)
const fetch = require('node-fetch');
const pathfs= process.argv[2]

const statusLinks = (arrayLinks) => {
    //return Promise.all= arrayLinks.map(  async url => {
        const newArrayLinks = arrayLinks.map(  async url => {
           
            try{
                const  statusUrl = await fetch(url.href)
                url['status'] = statusUrl.status
                return url;       
            }    
            catch (error){
                url['status'] = error.code;
                return url;
            }
        })
          return newArrayLinks;
}
//   return Promise.all(newArrayLinks)
//   resolve (arrayLinks)
//   reject ('Error')

// })
// }
module.exports = statusLinks;

//await Promise.all(statusLinks(links))