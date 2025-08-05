import { test, expect } from '@playwright/test';
import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('Should show added product in cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addBackPackToCart();
  await cartPage.goToCart();

  const isCartVisible = await cartPage.isCartPageVisible();
  const isProductVisible = await cartPage.isProductInCart();

  expect(isCartVisible).toBeTruthy();
  expect(isProductVisible).toBeTruthy();
});
