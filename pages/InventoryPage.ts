import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly itemName = '[data-test="inventory-item-name"]';
  readonly addToCartButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
  readonly removeButton = '[data-test="remove-sauce-labs-backpack"]';

  async addBackPackToCart() {
    await this.click(this.addToCartButton);
  }

  async isBackPackInCart(): Promise<boolean> {
    return this.page.isVisible(this.removeButton);
  }
}
