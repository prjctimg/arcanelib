import { newE2EPage } from '@stencil/core/testing';

describe('arc-fab', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-fab></arc-fab>');

    const element = await page.find('arc-fab');
    expect(element).toHaveClass('hydrated');
  });
});
