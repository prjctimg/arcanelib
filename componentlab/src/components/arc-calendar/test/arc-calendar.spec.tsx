import { newSpecPage } from '@stencil/core/testing';
import { ArcCalendar } from '../arc-calendar';

describe('arc-calendar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcCalendar],
      html: `<arc-calendar></arc-calendar>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-calendar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-calendar>
    `);
  });
});
