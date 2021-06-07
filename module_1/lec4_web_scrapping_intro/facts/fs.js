const fs = require("fs");
const cheerio = require("cheerio");
let htmlkadata = fs.readFileSync("./index.html" );
let myDocument = cheerio.load(htmlkadata);
let h1kaData = myDocument("h1").text();
console.log(myDocument("ul>a").text());
