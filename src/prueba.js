const {mdLinks}= require ("./index.js")
//const pathfs= process.argv[2];


mdLinks("README.md")
.then((data) => {
console.log(data)
}).catch((err)=>{
    console.log(err)
})