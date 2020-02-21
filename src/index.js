
const pathfs= process.argv[2]
const arrayreadFile= require (`./readFile`)

//module.exports = mdlinks = (pathfs,options)=>{

arrayreadFile(pathfs,(error,data)=>{ 
    if (error){
    console.log(error)
    }
      console.log(data)  
})

//}
