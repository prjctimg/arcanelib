import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-dropdown',
  styleUrl: 'arc-dropdown.css',
  shadow: true,
})
export class ArcDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
