import { newE2EPage } from '@stencil/core/testing';

describe('arc-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-dropdown></arc-dropdown>');

    const element = await page.find('arc-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
