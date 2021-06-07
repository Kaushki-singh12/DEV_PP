const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://twitter.com/search?q=verified+new+delhi+%28bed+OR+beds+OR+icu+OR+oxygen+OR+ventilator+OR+ventilators+OR+test+OR+tests+OR+testing+OR+fabiflu+OR+remdesivir+OR+favipiravir+OR+tocilizumab+OR+plasma+OR+tiffin+OR+food+OR+ambulance+OR+amphotericin+b+OR+amphotericin%29+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22need%22+-%22needs%22+-%22required%22+-%22require%22+-%22requires%22+-%22requirement%22+-%22requirements%22&f=live');
  await page.waitForTimeout(2000);
  const textContent = await page.evaluate(() =>{
    let title = (document.querySelectorAll('.css-901oao.r-18jsvk2.r-1qd0xha.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0'));
    const vid_name = [...title]
    return vid_name.map(h=>h.innerText);
});
console.log(textContent);
})();