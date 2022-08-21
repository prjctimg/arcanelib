import { newE2EPage } from '@stencil/core/testing';

describe('arc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-button></arc-button>');

    const element = await page.find('arc-button');
    expect(element).toHaveClass('hydrated');
  });
});
