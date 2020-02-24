
const pathfs= process.argv[2]
const arrayreadFile= require (`./readFile`)
const http = require ("http")

arrayreadFile(pathfs,(error,data)=>{ 
    if (error){
    console.log(error)
    }
      for (let i=0 ;i<data.length;i++){
          ping (data[i])
      }
      function ping (url){
          const start= new Date()

          http.get({host:url}, function (res){
              console.log ("URL:" + url)
              console.log ("Response Time:" +(new Date()-start)+"ms")
          })
      }

})

 

