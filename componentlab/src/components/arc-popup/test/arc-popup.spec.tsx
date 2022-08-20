import { newSpecPage } from '@stencil/core/testing';
import { ArcPopup } from '../arc-popup';

describe('arc-popup', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcPopup],
      html: `<arc-popup></arc-popup>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-popup>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-popup>
    `);
  });
});
