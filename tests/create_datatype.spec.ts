import { expect, test } from '@playwright/test';
import { loginWithOtp } from '../utils/loginHelper'; 

test.beforeEach(async ({ page }) =>{
  await loginWithOtp(page); 

  const dataGovBtn = page.locator('a[href="/protect/data-governance-landing"]');
  await expect(dataGovBtn).toBeVisible();
  await dataGovBtn.click();

  const dataTypeBtn = page.locator('a.sidebar-link-overlay[href="/protect/data-governance"]');
  await expect(dataTypeBtn).toBeVisible();
  await dataTypeBtn.click();

  const createDataType = page.locator('.btn.btn-primary.btn-sm');
  await expect(createDataType).toBeVisible();
  await createDataType.click();
})

  //1. For creating sensitive word data type with classification "Internal"

test('Sensitive Word',async({ page }) => {
  await page.locator("#dataTypeName").fill(" Sensitive Automated Data Type");
  await page.locator("#rule").click();
  await page.selectOption('#rule', { value: 'Sensitive Words' });
  await page.locator("#classification").click();
  await page.selectOption("#classification", {value: "1016" });

  await page.locator('.ng-input input[role="combobox"]').first().click();
  await page.waitForSelector('.ng-dropdown-panel', { state: 'visible' });
  await page.locator('.ng-dropdown-panel [role="option"]', { hasText: 'hardik.r@guardware.com.au' }).click();
  
  await page.locator('#atLeastPhrases').check();
  const numberInput = page.locator("input[type='number']");
  await numberInput.click();
  await numberInput.clear();
  await numberInput.fill('1');

  const senWord = page.locator('.ng-input input[role="combobox"]').nth(1);
  await senWord.click();
  await senWord.fill("foix");
  await page.waitForSelector('.ng-dropdown-panel', { state: 'visible' });
  await page.locator('.ng-dropdown-panel [role="option"]', { hasText: /^foix$/ }).click()

  const submitBtn = page.locator(".button-text");
  await expect(submitBtn).toBeVisible();
  await submitBtn.click();

  await page.pause();

})
  // 2. For creating regular expression with classification "Internal"
test('Regular Expression', async( {page} ) =>{
  await page.locator("#dataTypeName").fill("Regex Automated Data Type");
  await page.locator("#rule").click();
  await page.selectOption('#rule', { value: 'Regular Expression' });
  await page.locator("#classification").click();
  await page.selectOption("#classification", {value: "1016" });

  await page.locator('.ng-input input[role="combobox"]').first().click();
  await page.waitForSelector('.ng-dropdown-panel', { state: 'visible' });
  await page.locator('.ng-dropdown-panel [role="option"]', { hasText: 'hardik.r@guardware.com.au' }).click();

  const regex = page.locator(".regex-input.test-text-input.ng-pristine.ng-valid.ng-touched").click();
  await regex.fill("^(97|98)\d{8}$");
  



  
  await page.pause();
})





