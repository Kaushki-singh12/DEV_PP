// const { text } = require('cheerio/lib/static');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/results?search_query=covid+home+remedies');
  await page.waitForSelector('#video-title > yt-formatted-string');

  const textContent = await page.evaluate(() =>{
    let title = (document.querySelectorAll('#video-title > yt-formatted-string'));
    const vid_name = [...title]
    return vid_name.map(h=>h.innerText);
});
await page.waitForSelector('a#video-title[href]');
const linkContent = await page.evaluate(() =>{
    let links = (document.querySelectorAll('a#video-title[href]'));
    const vid_link = [...links]
    return vid_link.map(h=>h.href);
});
console.table(textContent);
  console.table(linkContent);
  // let tableData = document.querySelector(".videolinks");
  // for(let i=1 ; i<textContent.length ; i++){
  //   count++;
  //   let div = document.createElement("div");
  //   div.innerHTML = `${count}. ${textContent[i]}  `;
  //   tableData.append(div);
  // }
  // let tableLinks = document.querySelector(".videolinks");
  // for(let i=1 ; i<linkContent.length ; i++){
  //   count++;
  //   let div = document.createElement("div");
  //   div.innerHTML = `${count}. ${linkContent[i]}  `;
  //   tableLinks.append(div);
  // }

  browser.close();
})();