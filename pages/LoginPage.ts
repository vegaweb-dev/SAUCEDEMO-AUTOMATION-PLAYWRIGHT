import { BasePage } from './BasePage';
import { Page } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly usernameInput = '[data-test="username"]';
  readonly passwordInput = '[data-test="password"]';
  readonly loginButton = '[data-test="login-button"]';
  readonly errorMessage = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async navigate() {
    await this.navigateTo('http://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.fill(this.usernameInput, username);
    await this.fill(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async getErrorMessage(): Promise<string | null> {
    const text = await this.page.textContent(this.errorMessage);
    if (text === null) {
      throw new Error('No se encontró el mensaje de error');
    }
    return text;
  }
}
