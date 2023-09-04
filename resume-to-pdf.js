const puppeteer = require("puppeteer");

async function printPDF() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/resume", {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({
    path: "./assets/resume.pdf",
    format: "A4",
    scale: 0.8,
    printBackground: false,
    margin: { top: "60px", right: "30px", bottom: "60px", left: "30px" },
  });

  await browser.close();
  return pdf;
}

printPDF();
