import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-fab',
  styleUrl: 'arc-fab.css',
  shadow: true,
})
export class ArcFab {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
