import { Component, h, State, Listen } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host'

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

  //Allow the button press to toggle the dropdown show/hide. Checkout dropdown js
  //Add a list that is displayed when the state is Open.
  render() {
    return (
      <StyledHost>
        <slot>
          <div class={`dropdown`}>

            <label tabIndex={0} class={`btn m-1 bg-blue-600`}> {this.isOpen ? 'Open' : 'Closed'}</label>
            <ul tabindex={0} class={`dropdown-content menu p-2 shadow bg-slate-100 rounded-box w-52`}>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          {/* <button>
           
          </button> */}
        </slot>
      </StyledHost>
    );
  }

}
