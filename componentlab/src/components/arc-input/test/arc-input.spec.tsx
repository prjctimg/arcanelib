import { newSpecPage } from '@stencil/core/testing';
import { ArcInput } from '../arc-input';

describe('arc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ArcInput],
      html: `<arc-input></arc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <arc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </arc-input>
    `);
  });
});
