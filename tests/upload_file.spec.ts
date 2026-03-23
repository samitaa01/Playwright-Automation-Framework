import{test, expect, Locator} from '@playwright/test';

// 1. Upload files on PDF24

test.only('Upload Files PDF24', async({page})=>{
    await page.goto("https://tools.pdf24.org/en/pdf-converter");
    await expect(page).toHaveTitle("PDF Converter - 100% free & online - PDF24");

    await page.locator(".toolLink.convertToPdf").click();
    await page.waitForURL(/convert-to-pdf/);
    const fileInput: Locator= page.locator("input[type='file']");
    await fileInput.setInputFiles("C:/Samita/abcd.docx");

    const convertBtn = page.locator("button[class='btn action convert']");
    await expect(convertBtn).toBeEnabled({ timeout: 5000 });
    await convertBtn.click();

   /* const downloadButton = page.locator("button[id='downloadTool']");
    await expect(downloadButton).toBeVisible();
    await expect(downloadButton).toBeEnabled();
    await downloadButton.click(); 
    */
    await page.pause();

}) 

//2. Upload files on I love PDF 

test("Upload Files - I love PDF", async({page})=>{
    await page.goto("https://www.ilovepdf.com/");
    await expect(page).toHaveTitle("iLovePDF | Online PDF tools for PDF lovers");
    await  page.locator("a[title='Word to PDF']").click();
    await page.waitForURL(/word_to_pdf/);
    const fileInp: Locator =  page.locator("input[type='file']");
    await fileInp.setInputFiles("C:/Samita/abcd.docx");
    //await fileInp.setInputFiles("C:/Samita/test.docx");

    const covertbtn = page.locator("button[id='processTask']");
    await expect(covertbtn).toBeEnabled({ timeout:5000 });
    await covertbtn.click();

    //await page.pause();
    
    console.log("Word file has been converted to the PDF");
    /*
    const downloadBtn = page.locator('#download');
    await expect(downloadBtn).toBeVisible();
    await expect(downloadBtn).toBeEnabled();
    await downloadBtn.click(); 
    */
    await page.pause();

})

test("Upload Files - freepdfconverter", async({page})=>{
    await page.goto("https://www.freepdfconvert.com/");
    await expect(page).toHaveTitle(/Best PDF Converter/);
    const fileinp = page.locator("input[type='file']");
    await fileinp.setInputFiles("C:/Samita/abcd.docx");
    await page.pause();




})
