const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on start page1", {timeout: 10000}, async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`);
  });

When("user click element a1", async function () {
  return await clickElement(this.page, "a.page-nav__day.page-nav__day_today.page-nav__day_chosen");
});
When("click element b1", async function () {  
  return await clickElement(this.page, "section:nth-child(1) > div:nth-child(2) > ul > li > a");
});
When("click element c1", async function () {  
  return await clickElement(this.page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(3) > span:nth-child(1)");
});
When("click element d1", async function () {
  await clickElement(this.page, "button");
});

Then("user sees ver.1 {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
});

Given("user is on start page2", {timeout: 10000}, async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`);
  });

When("user click element a2", async function () {
  return await clickElement(this.page, "a:nth-child(2)");
});
When("click element b2", async function () {  
  return await clickElement(this.page, "section:nth-child(2) > div:nth-child(2) > ul > li > a");
});
When("click element c2", async function () {  
  return await clickElement(this.page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
});
When("click element d2", async function () {  
  return await clickElement(this.page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span.buying-scheme__chair.buying-scheme__chair_vip");
});
When("click element e2", async function () {
  await clickElement(this.page, "button");
});

Then("user sees ver.2 {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
});

Given("user is on start page3", {timeout: 10000}, async function () {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php`);
  });

When("user click element a3", async function () {
  return await clickElement(this.page, "a:nth-child(2)");
});
When("click element b3", async function () {  
  return await clickElement(this.page, "section:nth-child(1) > div:nth-child(3) > ul > li > a");
});
When("click element c3", async function () {  
  return await clickElement(this.page, "section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(1) > span:nth-child(1)");
});
When("click element d3", async function () {
  await clickElement(this.page, "button");
});

Then("user sees ver.3 {string}", async function (string) {
  const actual = await getText(this.page, "button");
  const expected = await string;
  expect(actual).contains(expected);
});