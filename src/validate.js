const statusLinks = require (`./validateLinks.js`)

const validLinks = links => {
    let UNICO =0;
       return new Promise ((resolve, reject)=>{
           for(let i=0; i<links.length; i++){
              if (links[i].status <400){
               UNICO +=1;
               return UNICO
               }
           else {
               ROTO ++;
               return ROTO
               }
            }     
// })
})
resolve ({UNICO});
  reject ('Error');
}
module.exports= validLinks;