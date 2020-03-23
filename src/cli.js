const { mdLinks } = require('./index.js');
const pathfs = process.argv[2];
const options = {
  validate: process.argv.includes('--validate') || process.argv.includes('-v'),
  stats: process.argv.includes('--stats') || process.argv.includes('-s'),
}
mdLinks(pathfs, options).then((data,stats)=> {
  console.log(data,stats);
}).catch((err)=> {
  console.log(err);
})