const http = require ("http")

 urls = ["www.google.com",
           "technotip.com", 
           "www.max.com",
           "www.youtube.com"]

for (let index=0 ;index<urls.length;index++){
    ping (urls[index])
function ping (url){

    http.get({host:url}, function (res){
        const {statusCode} = res
        if(statusCode !== 200) {
            console.log("El link esta roto : "+ url)
        } else{
            console.log("El link esta funcionando : "+ url)
        }   
    })
}
}