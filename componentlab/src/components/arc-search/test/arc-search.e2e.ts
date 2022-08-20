import { newE2EPage } from '@stencil/core/testing';

describe('arc-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-search></arc-search>');

    const element = await page.find('arc-search');
    expect(element).toHaveClass('hydrated');
  });
});
