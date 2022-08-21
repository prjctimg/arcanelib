import { newSpecPage } from '@stencil/core/testing';
import { ArcTextbox } from '../arc-textbox';

describe('arc-textbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcTextbox],
      html: `<arc-textbox></arc-textbox>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-textbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-textbox>
    `);
  });
});
