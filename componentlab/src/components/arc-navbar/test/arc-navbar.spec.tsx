import { newSpecPage } from '@stencil/core/testing';
import { ArcHeader } from '../arc-navbar';

describe('arc-navbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcHeader],
      html: `<arc-navbar></arc-navbar>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-navbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-navbar>
    `);
  });
});
