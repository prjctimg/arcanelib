import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-timer',
  styleUrl: 'arc-timer.css',
  shadow: true,
})
export class ArcTimer {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
