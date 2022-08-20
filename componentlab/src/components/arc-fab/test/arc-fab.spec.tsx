import { newSpecPage } from '@stencil/core/testing';
import { ArcFab } from '../arc-fab';

describe('arc-fab', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcFab],
      html: `<arc-fab></arc-fab>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-fab>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-fab>
    `);
  });
});
