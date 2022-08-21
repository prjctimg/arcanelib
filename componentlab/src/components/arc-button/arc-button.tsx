import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-button',
  styleUrl: 'arc-button.css',
  shadow: true,
})
export class ArcButton {

  render() {
    return (
      <Host>
        <slot>
          <button class='px-3 py-2.5 font-semibold bg-blue-500 text-white'>Get started</button>
        </slot>
      </Host>
    );
  }

}
