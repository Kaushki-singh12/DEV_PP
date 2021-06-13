const puppeteer = require('puppeteer');
const fs = require('fs');
let count = 0;
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://twitter.com/search?q=verified+new+delhi+%28bed+OR+beds+OR+icu+OR+oxygen+OR+ventilator+OR+ventilators+OR+test+OR+tests+OR+testing+OR+fabiflu+OR+remdesivir+OR+favipiravir+OR+tocilizumab+OR+plasma+OR+tiffin+OR+food+OR+ambulance+OR+amphotericin+b+OR+amphotericin%29+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22need%22+-%22needs%22+-%22required%22+-%22require%22+-%22requires%22+-%22requirement%22+-%22requirements%22&f=live');
  await page.waitForTimeout(3000);
  const textContent = await page.evaluate(() =>{
    let title = (document.querySelectorAll('.css-901oao.r-18jsvk2.r-1qd0xha.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0'));
    const vid_name = [...title]
   let allresources =  vid_name.map(h=>h.innerText);
   return allresources.join();
});

console.log(textContent);

fs.writeFile('resources.txt' ,(textContent) , function(err) {
  if (err) throw err;
  console.log("Saved!");
});

})();
// let allCaseCount = document.querySelector(".allResources");
//       let div = document.createElement("div");
//         div.innerHTML = './resources.txt';
//       allCaseCount.append(div);
      


// ['#Covid19IndiaHelp #bedsavailability #ECMO #delhi',
//   'Oxygen beds available without ECMO facility\n' +
//     'New Delhi\n' +
//     'Medeor Hospital, Qutab Institutional area, B 33-34, Block B.\n' +
//     'Contact details - \n' +
//     '01141222222\n' +
//     'Verified \n' +]
// [#Covid19IndiaHelp #bedsavailability #ECMO #delhi',
//   '#verified \n' +]

//     ['#oxygen available in #Delhi NCR("Krishna Market, Lajpat Nagar for refilling Tilak Nagar for Cans")\n' +
//     '#"GURUDWARA SRI GURU SINGH SABHA B BLOCK\n' +
//     'GK1 NEW DELHI"\n' +
//     'contact no.  "8130184210\n' +
//     '(Only whatsapp)"\n' +
//     'Available\n' +
//     'verified at  27/05 10:00 PM @JanBharat_Org',
//   '#verified \n' +]