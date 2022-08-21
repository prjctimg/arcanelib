import { newE2EPage } from '@stencil/core/testing';

describe('arc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-input></arc-input>');

    const element = await page.find('arc-input');
    expect(element).toHaveClass('hydrated');
  });
});
