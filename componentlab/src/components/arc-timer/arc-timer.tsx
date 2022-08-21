import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'arc-timer',
  styleUrl: 'arc-timer.css',
  shadow: true,
})
export class ArcTimer {
  timer: number;

  @State() currenTime: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {

      this.currenTime = Date.now();
    }, 1000);

  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }


  // toDate string returns our normal date. Try to split the date object into 3 parts to make each node manipulation easier.
  render() {
    const time = new Date(this.currenTime).toDateString()
    return (
      <Host>
        <slot>
          <span>{time}</span>
        </slot>
      </Host>
    );
  }

}
