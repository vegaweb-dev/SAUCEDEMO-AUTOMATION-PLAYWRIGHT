import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly cartItem = '.cart_item';
  readonly cartTitle = '.title';
  readonly cartLink = '.shopping_cart_link';

  async goToCart() {
    await this.click(this.cartLink);
  }
  async isProductInCart() {
    return await this.isVisible(this.cartItem);
  }

  async isCartPageVisible() {
    return await this.isVisible(this.cartTitle);
  }
}
