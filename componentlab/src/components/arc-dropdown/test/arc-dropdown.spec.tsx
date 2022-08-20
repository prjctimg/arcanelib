import { newSpecPage } from '@stencil/core/testing';
import { ArcDropdown } from '../arc-dropdown';

describe('arc-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcDropdown],
      html: `<arc-dropdown></arc-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-dropdown>
    `);
  });
});
