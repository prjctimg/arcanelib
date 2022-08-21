import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-input',
  styleUrl: 'arc-input.css',
  shadow: true,
})
export class ArcInput {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
