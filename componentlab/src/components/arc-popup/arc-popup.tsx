import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-popup',
  styleUrl: 'arc-popup.css',
  shadow: true,
})
export class ArcPopup {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
