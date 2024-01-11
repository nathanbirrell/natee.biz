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
    // scale: 0.8,
    printBackground: false,
    preferCSSPageSize: true,
    // margin: { top: 0, right: 0, bottom: "20px", left: 0 },
  });

  await browser.close();
  return pdf;
}

printPDF("http://localhost:8080/resume", "./assets/resume.pdf");

// printPDF("http://localhost:8080/resume-lead", "./assets/resume-lead.pdf");
