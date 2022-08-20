import { newE2EPage } from '@stencil/core/testing';

describe('arc-timer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<arc-timer></arc-timer>');

    const element = await page.find('arc-timer');
    expect(element).toHaveClass('hydrated');
  });
});
