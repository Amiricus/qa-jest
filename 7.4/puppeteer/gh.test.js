jest.setTimeout(60000);

let page;

beforeEach(async () => {
  page = await browser.newPage();
}, 10000);

afterEach(() => {
  jest.clearAllTimers();
  page.close();
});

describe("Github page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/team");
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 15000);
});

describe("Github Packages page tests", () => {
  beforeEach(async () => {
    await page.goto("https://github.com/features/packages");
  }, 10000);

  test("The h1 header content'", async () => {
    await page.waitForSelector('h1');
    const title1 = await page.title();
    expect(title1).toEqual('GitHub Packages: Your packages, at home with their code · GitHub');
  }, 20000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 10000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started")
  }, 15000);
});
