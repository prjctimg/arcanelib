import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-navbar',
  styleUrl: 'arc-navbar.css',
  shadow: true,
})
export class ArcNavbar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
