const fs = require('fs');
const path = require('path');

(async () => {
  try {
    const playwright = require('playwright');
    const browser = await playwright.chromium.launch();
    const page = await browser.newPage();

    // Read the HTML file
    const htmlPath = path.join(__dirname, '..', 'public', 'CV.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');

    // Set the HTML content
    await page.setContent(htmlContent, { waitUntil: 'networkidle' });

    // Generate PDF
    const pdfPath = path.join(__dirname, '..', 'public', 'CV.pdf');
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: { top: '12mm', right: '15mm', bottom: '12mm', left: '15mm' },
    });

    console.log(`✓ PDF generated successfully: ${pdfPath}`);

    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error.message);
    process.exit(1);
  }
})();
