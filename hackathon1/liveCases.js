const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');
const url = 'https://www.worldometers.info/coronavirus/';

axios.get(url)
  .then(response => {
   let data = [];
    html=response.data;
    const $ = cheerio.load(html);
    $('#maincounter-wrap').each((i, elem) => {
      data.push({
        title : $(elem).find('h1').text(),                 
        value : $(elem).find('span').text(),
      });
    });
    console.log(data);
    let allCaseCount = document.querySelector(".allcasecount");
    for(let i=0; i<data.length; i++){
      let div = document.createElement("div");
        div.innerHTML = data[i].title;
        div1.innerHTML = data[i].value;
      allCaseCount.append(div);
      }
    
  
  
    
  })
  .catch(error => {
    console.log(error);
  })

