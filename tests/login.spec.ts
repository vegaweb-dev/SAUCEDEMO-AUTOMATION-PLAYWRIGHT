import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    //In this line I just verify that the url actually cahnged to dashboard.
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });
});

test.describe('Login Test - Invalid Credentials', () => {
  test('Should show error message for locked-out user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('locked_out_user', 'secret_sauce');
    const errorMessage = await loginPage.getErrorMessage();
    //In this line I verify that the message shown is the expected one.
    expect(errorMessage).toContain('Epic sadface: Sorry, this user has been locked out');
  });
});
