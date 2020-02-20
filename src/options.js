

const mdLinks = require("md-links-extractor");
mdLinks("./some/example.md", { validate: true })
  .then(links => {
    // => [{ file, line, href, text, ok, status }]
  })
  .catch(err)
  