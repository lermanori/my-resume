const express = require("express");
const app = express();
const port = 3000;
const puppeteer = require("puppeteer");

const shoot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });
  //await page.addStyleTag({ path: "../dist/css/app.53545359.css" });
  await page.pdf({
    path: "cv-lerman-ori.pdf",
    height: 1500,
    width: 1342,
    printBackground: true,
    scale: 0.9,
    pageRanges: "1"
  });
  await browser.close();
};

shoot();
app.use(express.static("../dist"));

app.get("/", (_req, res) => {
  res.write("../dist/index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
