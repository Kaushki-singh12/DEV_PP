const axios = require('axios');
const cheerio = require('cheerio');
const { data } = require('cheerio/lib/api/attributes');
const url = 'https://www.amazon.in/s?k=covid+protection+products&crid=HO0J6TJGW0FZ&sprefix=covid+%2Caps%2C329&ref=nb_sb_ss_ts-doa-p_1_6';
let count = 0;
axios.get(url)
  .then(response => {
    let  data = [];
    html=response.data;
    const $ = cheerio.load(html);
    $('.a-section.a-spacing-medium').each((i, elem) => {
      data.push({
        img : $(elem).find('.s-image').attr('src'),                 
        name: $(elem).find('.a-size-base-plus.a-color-base.a-text-normal').text(),
        rating: $(elem).find('.a-icon-alt').text(),
        prize: $(elem).find('.a-price-whole').text(),
      });
      // var stats = data;
    });
    
    let tableData = document.querySelector(".essintialproducts");
    for(let i=0 ; i<59 ; i++){
      count++;
      let div = document.createElement("div");
      div.innerHTML = `${count}. ${data[i].name}-->${data[i].rating}-->${data[i].prize}`;
      tableData.append(div);
      console.table(data);
    }
  })
  .catch(error => {
    console.log(error);
  })

