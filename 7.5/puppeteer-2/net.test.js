const { clickElement, getText } = require("./lib/commands.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("Go to the cinema tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first positive test", async () => {
    await clickElement(page, "a.page-nav__day.page-nav__day_today.page-nav__day_chosen");
    await clickElement(page, "section:nth-child(1) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(1)");
    await clickElement(page, "button");
    const actual = await getText(page, "button.acceptin-button");
    expect(actual).toContain("Получить код бронирования");
  });

  test("The second positive test", async () => {
    await clickElement(page, "a:nth-child(2)");
    await clickElement(page, "section:nth-child(2) > div:nth-child(2) > ul > li > a");
    await clickElement(page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
    await clickElement(page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_vip");
    await clickElement(page, "button");
    const actual = await getText(page, "button.acceptin-button");
    expect(actual).toContain("Получить код бронирования");
  });

  test("The negative test", async () => {
    await clickElement(page, "a:nth-child(2)");
    await clickElement(page, "section:nth-child(1) > div:nth-child(3) > ul > li > a");
    await clickElement(page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
    await clickElement(page, "button");
    const actual = await getText(page, "button");
    expect(actual).toContain("Забронировать");
  });
});
