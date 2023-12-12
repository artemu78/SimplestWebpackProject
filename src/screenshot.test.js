const puppeteer = require("puppeteer");
const { toMatchImageSnapshot } = require("jest-image-snapshot");

expect.extend({ toMatchImageSnapshot });

describe("Screenshot testing", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: "new" });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("homepage should match screenshot, desktop", async () => {
    await page.setViewport({
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
    });
    await page.goto("http://localhost:3000"); // replace with your local/test URL
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });

  test("homepage should match screenshot, mobile", async () => {
    await page.setViewport({
      width: 375,
      height: 667,
      deviceScaleFactor: 1,
    });
    await page.goto("http://localhost:3000"); // replace with your local/test URL
    const screenshot = await page.screenshot();
    expect(screenshot).toMatchImageSnapshot();
  });
});
