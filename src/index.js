const pathfs= process.argv[2]
const arrayreadFile= require (`./readFile`)

arrayreadFile(pathfs,(error,data)=>
{
    console.log(data)

})
