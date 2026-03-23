import{test, expect, Locator} from '@playwright/test';

test("TextBox Actions", async({page})=>{

    await page.goto ("https://testautomationpractice.blogspot.com/");
    const textbox: Locator = page.locator("#name");
    await expect(textbox).toBeVisible();
    await expect(textbox).toBeEnabled();
    const maxLen: string|null = await textbox.getAttribute("maxlength"); //returns value of attribute
    expect(maxLen).toBe("15");
    await textbox.fill('Samita Awale');
    const enteredValue = await textbox.inputValue();
    console.log("The entered name:", enteredValue);
    expect(enteredValue).toBe("Samita Awale");
    await page.waitForTimeout(3000);


    const email: Locator = page.locator("#email");
    await expect(email).toBeVisible();
    await expect(email).toBeEnabled();
    const len: string|null = await email.getAttribute("maxlength"); //returns value of attribute
    expect(len).toBe("25");
    await email.fill("abcd@gmail.com");
    const Value = await email.inputValue();
    console.log("entered email:", Value);
    expect(Value).toBe("abcd@gmail.com");
    await page.waitForTimeout(3000);


    
    const phone: Locator = page.locator("#phone");
    await expect(phone).toBeVisible();
    await expect(phone).toBeEnabled();
    const plen: string|null = await phone.getAttribute("maxlength"); //returns value of attribute
    expect(plen).toBe("10");
    await phone.fill("9812365478");
    const pValue = await phone.inputValue();
    console.log("entered phone:", pValue);
    expect(pValue).toBe("9812365478");
    await page.waitForTimeout(3000);


    const address: Locator = page.locator("#textarea");
    await expect(address).toBeVisible();
    await expect(address).toBeEnabled();
    await address.fill("Nepal");
    const aValue = await address.inputValue();
    console.log("entered address:", aValue);
    expect(aValue).toBe("Nepal");
    await page.waitForTimeout(3000);

})

test("Radio Button Actions", async({page})=>{

    await page.goto ("https://testautomationpractice.blogspot.com/");
    const maleRadio: Locator = page.locator("#male");
    await expect(maleRadio).toBeVisible();
    await expect(maleRadio).toBeEnabled();
    expect (await maleRadio.isChecked()).toBe(false);
    await maleRadio.check();
    await expect(maleRadio).toBeChecked();
 

})

test.only("Checkbox Actions", async({page})=>{

    //1. Selecting specific checkbox
    await page.goto ("https://testautomationpractice.blogspot.com/");
    const SundayCheckbox: Locator = page.getByLabel("Sunday");
    await SundayCheckbox.check();
    await expect(SundayCheckbox).toBeChecked();
    
    //2. Selecting all the checkboxes and assert each is checked

    const days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxes: Locator []=days.map(index=> page.getByLabel(index));
    expect(checkboxes.length).toBe(7)


    for(const checkbox of checkboxes)
    {
        await checkbox.check();
        await expect(checkbox).toBeChecked();

    }
    
    await page.waitForTimeout(5000);

    for(const checkbox of checkboxes.slice(-3)) //deselect last 3 checkbox

    {
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();

    }
    

await page.waitForTimeout(3000);

    // Toggle checkboxes: if checked, uncheck : if unchecked, check
    for(const checkbox of checkboxes)
    {
        if(await checkbox.isChecked())
        {
            await checkbox.uncheck();
            await expect(checkbox).not.toBeChecked();
 
        }

        else
        {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }

    }
    await page.waitForTimeout(3000);

})







