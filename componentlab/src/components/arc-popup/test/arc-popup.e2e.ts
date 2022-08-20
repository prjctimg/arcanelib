import { newE2EPage } from '@stencil/core/testing';

describe('arc-popup', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-popup></arc-popup>');

    const element = await page.find('arc-popup');
    expect(element).toHaveClass('hydrated');
  });
});
