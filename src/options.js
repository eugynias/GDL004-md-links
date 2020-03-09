
const arrayreadFile= require (`./readFile`)
const http = require ("http")
const fetch = require('node-fetch');
const pathfs= process.argv[2]

arrayreadFile(pathfs,(error,data)=>{ 
    if (error){
    console.log(error)
    } else { 
 //for (let index=0 ;index<data.length;index++) {
  verifyLinks(data)
    .then (res =>{
      console.log(validlinks)
    })
    .catch(error=>{
      console.log(error)
    })
 }
})


const verifyLinks = async (arr) => {
    let validLinks=[];
    let wrongLinks=[];
    const promises = arr.map( async url => {
      try{
      const  statusUrl = await fetch(url)
      if(statusUrl.status < 400){
       return validLinks.push( statusUrl.url)
      } else {
        return wrongLinks.push( statusUrl.url)
      }
      } catch (error){
        console.error('No se encontro la IP: '+ url);
      }
 } )
 return Promise.all(promises)
}