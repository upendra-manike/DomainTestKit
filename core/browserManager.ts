import { chromium, firefox, webkit, type Browser } from '@playwright/test';

export type BrowserTypeName = 'chromium' | 'firefox' | 'webkit';

export class BrowserManager {
  static async launch(browser: BrowserTypeName = 'chromium'): Promise<Browser> {
    switch (browser) {
      case 'firefox':
        return firefox.launch();
      case 'webkit':
        return webkit.launch();
      default:
        return chromium.launch();
    }
  }
}
