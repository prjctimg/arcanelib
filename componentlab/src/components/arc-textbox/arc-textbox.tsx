import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-textbox',
  styleUrl: 'arc-textbox.css',
  shadow: true,
})
export class ArcTextbox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
