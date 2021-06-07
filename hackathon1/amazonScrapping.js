const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.amazon.in/s?k=covid+protection+products&crid=HO0J6TJGW0FZ&sprefix=covid+%2Caps%2C329&ref=nb_sb_ss_ts-doa-p_1_6';

axios.get(url)
  .then(response => {
    data = [];
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
    console.table(data);
  })
  .catch(error => {
    console.log(error);
  })

