import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium, devices } from 'playwright';

const baseUrl = process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:5174/';
const outputDir = path.resolve(process.cwd(), 'tmp/playwright-review');

async function captureDesktop(page) {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outputDir, 'desktop-home.png') });

  await page.evaluate(() => {
    document.getElementById('id_projects')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outputDir, 'desktop-projects.png') });

  await page.evaluate(() => {
    document.getElementById('id_experience')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outputDir, 'desktop-experience.png') });

  await page.evaluate(() => {
    document.getElementById('id_contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outputDir, 'desktop-contact.png') });
}

async function captureMobile(browser) {
  const context = await browser.newContext({
    ...devices['iPhone 13'],
  });
  const page = await context.newPage();

  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(outputDir, 'mobile-home.png') });

  await page.getByRole('button', { name: /abrir menu/i }).click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outputDir, 'mobile-menu.png') });

  await page.getByRole('button', { name: /fechar menu/i }).click();
  await page.waitForTimeout(400);

  await page.evaluate(() => {
    document.getElementById('id_projects')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: path.join(outputDir, 'mobile-projects.png') });

  await page.evaluate(() => {
    document.getElementById('id_contact')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(outputDir, 'mobile-contact.png') });

  await context.close();
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await captureDesktop(page);
    await page.close();

    await captureMobile(browser);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
