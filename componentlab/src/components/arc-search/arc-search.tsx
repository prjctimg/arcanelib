import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-search',
  styleUrl: 'arc-search.css',
  shadow: true,
})
export class ArcSearch {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
