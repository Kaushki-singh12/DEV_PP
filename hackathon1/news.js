
//   let newss = document.getElementById('livenews');
// console.log(newss);
// newss.addEventListener("click" , function(){

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://economictimes.indiatimes.com/news/newsblogs/coronavirus-india-cases-update-covid-vaccine-latest-news-june-5/liveblog/msid-83252009,curpg-2.cms';
const dataa = document.getElementsByClassName("data")
const button = document.getElementsByClassName("btn");

button.addEventListener("click",newss)
function newss(){
axios.get(url)
  .then(response => {
    data = [];
    html=response.data;
    const $ = cheerio.load(html);
    $('.updateText').each((i, elem) => {
      data.push({
        title : $(elem).find('h3 ').text(),                 
      });
    });
    //console.log(data);
    dataa.innerText = data[2].title 
    
  })
  .catch(error => {
    console.log(error);
  })
}

// }); 