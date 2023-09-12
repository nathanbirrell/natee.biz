const puppeteer = require("puppeteer");

async function printPDF(
  url = "http://localhost:8080/resume",
  output = "./assets/resume.pdf"
) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({
    path: output,
    format: "A4",
    scale: 0.8,
    printBackground: false,
    margin: { top: "60px", right: "30px", bottom: "60px", left: "30px" },
  });

  await browser.close();
  return pdf;
}

printPDF("http://localhost:8080/resume", "./assets/resume.pdf");

printPDF("http://localhost:8080/resume-lead", "./assets/resume-lead.pdf");
