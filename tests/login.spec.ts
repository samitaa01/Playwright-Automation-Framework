import { expect, test } from '@playwright/test';
import { loginWithOtp } from '../utils/loginHelper'; 

test('Login test', async ({ page }) => {
  await loginWithOtp(page); 
  await page.locator("a[routerlinkactive='active-link'][ng-reflect-router-link-active='active-link'][ng-reflect-router-link='/protect/security-groups']").click();
  await expect(page).toHaveURL(/security-groups/, { timeout: 3000 });
  await page.locator("button[class='p-ripple p-button p-component p-button-primary p-button-outlined'] span[class='p-button-label ng-star-inserted']").click();
  await page.waitForTimeout(5000); 
  page.getByPlaceholder("Search").fill("Quality");

  await page.pause();


});
