import { newSpecPage } from '@stencil/core/testing';
import { ArcTimer } from '../arc-timer';

describe('arc-timer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcTimer],
      html: `<arc-timer></arc-timer>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-timer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-timer>
    `);
  });
});
