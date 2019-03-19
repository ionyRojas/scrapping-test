
const puppeteer = require('puppeteer');

async function getPic() {
//   const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://instagram.com');
  await page.setViewport({width: 1000, height: 500})
  setTimeout(async ()=> {
      await page.screenshot({path: 'laplata.png'});
      await browser.close();
  }, 50000)

}

getPic();