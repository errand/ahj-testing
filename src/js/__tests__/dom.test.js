import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add valid class to the form', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#cardsValidationForm');
    const input = await form.$('#card_number');
    await input.type('5318065797202099');
    const submit = await form.$('#submitform');
    await submit.click();
    await page.waitForSelector('#cardsValidationForm.valid');
  });
});
