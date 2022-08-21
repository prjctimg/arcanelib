import { newSpecPage } from '@stencil/core/testing';
import { ArcButton } from '../arc-button';

describe('arc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: `<arc-button></arc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-button>
    `);
  });
});
