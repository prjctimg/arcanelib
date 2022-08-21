import { Component, Host, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'arc-dropdown',
  styleUrl: 'arc-dropdown.css',
  shadow: true,
})
export class ArcDropdown {


  //Changes to this state will cause a rerender.
  @State() isOpen: boolean = true

  // Event listener for the click event. Takes a capture? param too
  @Listen('click', { capture: true })

  //Whenever click event occurs, update this.isOpen causing the rerender.
  handleClick() {
    this.isOpen = !this.isOpen;
  }


  //Add a list that is displayed when the state is Open.
  render() {
    return (
      <Host>
        <slot>
          <button>
            {this.isOpen ? 'Open' : 'Closed'}
          </button>
        </slot>
      </Host>
    );
  }

}
