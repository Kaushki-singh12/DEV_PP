
//   let newss = document.getElementById('livenews');
// console.log(newss);
// newss.addEventListener("click" , function(){

const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');
const url = 'https://zeenews.india.com/latest-news' ;
// timeout : 5000}
const dataa = document.getElementsByClassName("data")
const button = document.querySelector(".btn");
let count=0;

button.addEventListener("click",newss)
function newss(){
axios.get(url)
  .then(response => {
    let data = [];
    body=response.data;
    const $ = cheerio.load(body);
    $('.sec-con-box').each((i, elem) => {
      data.push({
        Headline : $(elem).find('h3').text().trim(), 
        Detail : $(elem).find('p').text().trim(),             
      });
    });
    console.log(data);
    dataa.innerText = data[2].title 
    let tableData = document.querySelector(".table-data");
    for(let i=0 ; i<data.length-1; i++){
      count++;
      let div = document.createElement("div");
      div.innerHTML = `${count}. ${data[i].Headline} ${data[i].Detail}  `;
      tableData.append(div);
    }

  })
  .catch(error => {
    console.log(error);
  })
}

// }); 