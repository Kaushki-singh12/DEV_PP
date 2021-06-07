const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.worldometers.info/coronavirus/';

axios.get(url)
  .then(response => {
    data = [];
    html=response.data;
    const $ = cheerio.load(html);
    $('#maincounter-wrap').each((i, elem) => {
      data.push({
        title : $(elem).find('h1').text(),                 
        value : $(elem).find('span').text(),
      });
    });
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })

