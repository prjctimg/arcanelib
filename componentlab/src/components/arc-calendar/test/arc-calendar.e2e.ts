import { newE2EPage } from '@stencil/core/testing';

describe('arc-calendar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-calendar></arc-calendar>');

    const element = await page.find('arc-calendar');
    expect(element).toHaveClass('hydrated');
  });
});
