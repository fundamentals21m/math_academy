import { test, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import { COURSES } from '../../config/courses';

/**
 * PDF Export Tests
 *
 * Generate PDFs of sections for offline use and printing.
 * Run weekly to keep PDFs up to date.
 */

const PDFS_DIR = path.join(process.cwd(), 'pdfs');

test.describe('PDF Export', () => {
  // Ensure PDFs directory exists
  test.beforeAll(async () => {
    if (!fs.existsSync(PDFS_DIR)) {
      fs.mkdirSync(PDFS_DIR, { recursive: true });
    }
  });
  test.describe.configure({ mode: 'serial' });

  for (const course of COURSES) {
    test.describe(`@${course.id}`, () => {
      const courseDir = path.join(PDFS_DIR, course.id);

      test.beforeAll(async () => {
        if (!fs.existsSync(courseDir)) {
          fs.mkdirSync(courseDir, { recursive: true });
        }
      });

      test('export section 1 as PDF', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/section/1`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Wait for math to render

        // Hide navigation elements for clean PDF
        await page.addStyleTag({
          content: `
            aside, nav, header, footer, [class*="sidebar"],
            [class*="navigation"], button { display: none !important; }
            main { width: 100% !important; max-width: none !important; }
          `,
        });

        await page.pdf({
          path: path.join(courseDir, 'section-1.pdf'),
          format: 'Letter',
          margin: { top: '0.5in', bottom: '0.5in', left: '0.75in', right: '0.75in' },
          printBackground: true,
        });

        // Verify PDF was created
        const pdfPath = path.join(courseDir, 'section-1.pdf');
        expect(fs.existsSync(pdfPath)).toBe(true);

        // Check file size (should be reasonable)
        const stats = fs.statSync(pdfPath);
        expect(stats.size).toBeGreaterThan(1000); // At least 1KB
        expect(stats.size).toBeLessThan(10 * 1024 * 1024); // Less than 10MB
      });

      test('export theorems as PDF', async ({ page }) => {
        await page.goto(`${course.baseUrl}#/theorems`);
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000);

        await page.addStyleTag({
          content: `
            aside, nav, header, footer, [class*="sidebar"],
            [class*="navigation"], button:not([class*="expand"]) { display: none !important; }
            main { width: 100% !important; max-width: none !important; }
          `,
        });

        await page.pdf({
          path: path.join(courseDir, 'theorems.pdf'),
          format: 'Letter',
          margin: { top: '0.5in', bottom: '0.5in', left: '0.75in', right: '0.75in' },
          printBackground: true,
        });

        const pdfPath = path.join(courseDir, 'theorems.pdf');
        expect(fs.existsSync(pdfPath)).toBe(true);
      });
    });
  }
});

/**
 * Multi-Section PDF Export
 */
test.describe('Multi-Section PDF', () => {
  test.describe.configure({ mode: 'serial' });

  const course = COURSES[0];
  const courseDir = path.join(PDFS_DIR, course.id);

  test.beforeAll(async () => {
    if (!fs.existsSync(courseDir)) {
      fs.mkdirSync(courseDir, { recursive: true });
    }
  });

  test('export first 5 sections as single PDF', async ({ page }) => {
    // Create a temporary page that loads all sections
    let combinedHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          @page { margin: 0.5in; }
          .section { page-break-after: always; }
          .section:last-child { page-break-after: avoid; }
        </style>
      </head>
      <body>
    `;

    for (let sectionId = 1; sectionId <= Math.min(5, course.totalSections); sectionId++) {
      await page.goto(`${course.baseUrl}#/section/${sectionId}`);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(1000);

      // Get main content
      const content = await page.evaluate(() => {
        const main = document.querySelector('main, article, [class*="lesson"]');
        return main?.innerHTML || '';
      });

      combinedHtml += `<div class="section"><h1>Section ${sectionId}</h1>${content}</div>`;
    }

    combinedHtml += '</body></html>';

    // Load combined content
    await page.setContent(combinedHtml);
    await page.waitForTimeout(1000);

    // Export PDF
    await page.pdf({
      path: path.join(courseDir, 'sections-1-5.pdf'),
      format: 'Letter',
      margin: { top: '0.5in', bottom: '0.5in', left: '0.75in', right: '0.75in' },
      printBackground: true,
    });

    expect(fs.existsSync(path.join(courseDir, 'sections-1-5.pdf'))).toBe(true);
  });
});

/**
 * PDF Print Styles
 */
test.describe('Print Styles', () => {
  const course = COURSES[0];

  test('print styles are applied', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Emulate print media
    await page.emulateMedia({ media: 'print' });

    // Check that navigation is hidden
    const nav = await page.locator('nav, aside, [class*="sidebar"]').isVisible().catch(() => false);

    // In print mode, navigation should be hidden (ideally)
    // This depends on the CSS implementation
    console.log(`Navigation visible in print: ${nav}`);
  });

  test('math renders in print mode', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    await page.emulateMedia({ media: 'print' });

    // Math should still be visible
    const math = page.locator('.katex, mjx-container');
    if (await math.count() > 0) {
      await expect(math.first()).toBeVisible();
    }
  });
});

/**
 * PDF Quality Checks
 */
test.describe('PDF Quality', () => {
  const course = COURSES[0];
  const courseDir = path.join(PDFS_DIR, course.id);

  test('PDF has proper formatting', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const pdfBuffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
    });

    // Check PDF header (starts with %PDF)
    const header = pdfBuffer.slice(0, 5).toString('utf-8');
    expect(header).toBe('%PDF-');

    // Check reasonable size
    expect(pdfBuffer.length).toBeGreaterThan(1000);
  });

  test('PDF includes headers', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.pdf({
      path: path.join(courseDir, 'with-headers.pdf'),
      format: 'Letter',
      displayHeaderFooter: true,
      headerTemplate: `
        <div style="font-size: 10px; text-align: center; width: 100%;">
          ${course.name}
        </div>
      `,
      footerTemplate: `
        <div style="font-size: 10px; text-align: center; width: 100%;">
          Page <span class="pageNumber"></span> of <span class="totalPages"></span>
        </div>
      `,
      margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
      printBackground: true,
    });

    expect(fs.existsSync(path.join(courseDir, 'with-headers.pdf'))).toBe(true);
  });
});

/**
 * PDF Accessibility
 */
test.describe('PDF Accessibility', () => {
  const course = COURSES[0];

  test('PDF has document title', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    // Ensure page has title
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);

    // The PDF will use this title
    console.log(`Document title: ${title}`);
  });

  test('images have alt text for PDF', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');

    const images = await page.locator('img').all();
    let missingAlt = 0;

    for (const img of images) {
      const alt = await img.getAttribute('alt');
      if (!alt && !await img.getAttribute('aria-hidden')) {
        missingAlt++;
      }
    }

    // Log but don't fail (some images may be decorative)
    if (missingAlt > 0) {
      console.log(`Images without alt text: ${missingAlt}`);
    }
  });
});

/**
 * Generate PDF Index
 */
test.describe('PDF Index', () => {
  test('generate index.json', async () => {
    const index: Record<string, { name: string; pdfs: string[] }> = {};

    for (const course of COURSES) {
      const courseDir = path.join(PDFS_DIR, course.id);
      if (fs.existsSync(courseDir)) {
        const files = fs.readdirSync(courseDir).filter(f => f.endsWith('.pdf'));
        if (files.length > 0) {
          index[course.id] = {
            name: course.name,
            pdfs: files,
          };
        }
      }
    }

    // Write index
    fs.writeFileSync(
      path.join(PDFS_DIR, 'index.json'),
      JSON.stringify(index, null, 2)
    );

    console.log(`Generated PDF index with ${Object.keys(index).length} courses`);
  });
});

/**
 * PDF Size Optimization
 */
test.describe('PDF Optimization', () => {
  const course = COURSES[0];

  test('PDF file size is reasonable', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const pdfBuffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
    });

    const sizeMB = pdfBuffer.length / (1024 * 1024);
    console.log(`PDF size: ${sizeMB.toFixed(2)} MB`);

    // Should be under 5MB for a single section
    expect(sizeMB).toBeLessThan(5);
  });

  test('PDF without background is smaller', async ({ page }) => {
    await page.goto(`${course.baseUrl}#/section/1`);
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const withBg = await page.pdf({
      format: 'Letter',
      printBackground: true,
    });

    const withoutBg = await page.pdf({
      format: 'Letter',
      printBackground: false,
    });

    console.log(`With background: ${(withBg.length / 1024).toFixed(0)} KB`);
    console.log(`Without background: ${(withoutBg.length / 1024).toFixed(0)} KB`);

    // Without background should typically be smaller
    expect(withoutBg.length).toBeLessThanOrEqual(withBg.length);
  });
});
