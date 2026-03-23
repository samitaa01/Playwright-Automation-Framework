import { Page, expect } from '@playwright/test';
import { authenticator } from '@otplib/preset-default';
import dotenv from 'dotenv';

dotenv.config();

export async function loginWithOtp(page: Page) {
  const email = process.env.EMAIL!;
  const password = process.env.PASSWORD!;
  const secret = process.env.TOTP_SECRET!;

  await page.goto('https://dev-srv.guardware.com.au/protect/protect/login');
  await expect(page).toHaveTitle(/GuardWare/);

  await page.getByPlaceholder('Enter your email').fill(email);
  await page.getByPlaceholder('Enter your password').fill(password);
  await page.locator("button[type='submit']").click();

  const error = page.getByText('Login Failed');
  if (await error.isVisible({ timeout: 3000 }).catch(() => false)) {
    throw new Error('Login failed - check EMAIL/PASSWORD');
  } 

  await expect(page).toHaveURL('https://dev-srv.guardware.com.au/protect/protect/authentication', {
    timeout: 60000,
  });

  const otp = authenticator.generate(secret);
  console.log('Generated OTP:', otp);
  const otpBoxes = page.locator('input.p-inputotp-input');
  await expect(otpBoxes).toHaveCount(6, { timeout: 60000 });

  const digits = otp.split('');
  for (let i = 0; i < 6; i++) {
    await otpBoxes.nth(i).fill(digits[i]);
  }

  const authButton = page.getByRole('button', { name: 'Authenticate' });
  await expect(authButton).toBeVisible({ timeout: 60000 });
  await Promise.all([
    page.waitForURL('**/landing', { timeout: 60000 }),
    authButton.click(),
  ]);

  console.log('Login Successful!');
}




