import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'arc-calendar',
  styleUrl: 'arc-calendar.css',
  shadow: true,
})
export class ArcCalendar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
