import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';
import { LoginPage } from '../pages/LoginPage';

test('Should add product to cart after logging in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addBackPackToCart();
  const isInCart = await inventoryPage.isBackPackInCart();
  expect(isInCart).toBeTruthy();
});
