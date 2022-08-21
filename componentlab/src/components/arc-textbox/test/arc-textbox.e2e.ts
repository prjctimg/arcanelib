import { newE2EPage } from '@stencil/core/testing';

describe('arc-textbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-textbox></arc-textbox>');

    const element = await page.find('arc-textbox');
    expect(element).toHaveClass('hydrated');
  });
});
