import { Component, Host, h, State } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';

@Component({
  tag: 'arc-timer',
  styleUrl: 'arc-timer.css',
  shadow: true,
})
export class ArcTimer {
  timer: number;

  @State() currentTime: number = Date.now();

  connectedCallback() {
    this.timer = window.setInterval(() => {

      this.currentTime = Date.now();
    }, 1000);

  }

  disconnectedCallback() {
    window.clearInterval(this.timer);
  }


  // toDate string returns our normal date. Try to split the date object into 3 parts to make each node manipulation easier.
  render() {
    const time = new Date().toLocaleTimeString()
    return (
      <StyledHost>
        <slot>
          <span class={`card first-letter:text-pink-800 bg-slate-500 text-black px-2 py-2.5 w-fit`}>{time}</span>
        </slot>
      </StyledHost>


    );
  }

}
