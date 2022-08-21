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
        <slot></slot>
      </Host>
    );
  }

}
