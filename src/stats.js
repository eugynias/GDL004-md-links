
const statusLinks = require (`./validateLinks.js`)

const getStats = links => {
    let stats={
        unico: 0,
        roto: 0,
        total:links.length
    }
           for(let i=0; i<links.length; i++){
              if (links[i].status <400){
               stats.unico +=1;
               //return UNICO
               }
           else {
               stats.roto ++;
              // return ROTO
               }
            }
    return stats
} 
module.exports= getStats;