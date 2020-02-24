
const pathfs= process.argv[2]
const arrayreadFile= require (`./readFile`)


arrayreadFile(pathfs,(error,data)=>{ 
    if (error){
    console.log(error)
    }

      console.log(data)  
      return (data)
})


