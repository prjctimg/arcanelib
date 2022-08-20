import { newSpecPage } from '@stencil/core/testing';
import { ArcSearch } from '../arc-search';

describe('arc-search', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcSearch],
      html: `<arc-search></arc-search>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-search>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-search>
    `);
  });
});
