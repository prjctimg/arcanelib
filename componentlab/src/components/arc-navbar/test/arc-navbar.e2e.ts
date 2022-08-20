import { newE2EPage } from '@stencil/core/testing';

describe('arc-navbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-navbar></arc-navbar>');

    const element = await page.find('arc-navbar');
    expect(element).toHaveClass('hydrated');
  });
});
