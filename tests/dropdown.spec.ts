import {test,expect, Locator} from '@playwright/test';

test("Single Dropdown", async({page})=> {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#country").selectOption('Australia');
    //await page.locator("#country").selectOption({value:'UK'});
    //await page.locator("#country").selectOption({label:'Canada'});
    //await page.locator("#country").selectOption({index:3});

    await page.waitForTimeout(3000);


    const dropdownOpt : Locator =  page.locator("#country>option");
    await expect(dropdownOpt).toHaveCount(10);

    const optionText: string[]= await dropdownOpt.allTextContents();
    console.log(optionText);
    



})