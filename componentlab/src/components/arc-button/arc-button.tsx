import { Component, h } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';

@Component({
  tag: 'arc-button',

  shadow: true,
})
export class ArcButton {

  render() {
    return (
      <StyledHost>
        <slot>
          <button class='px-3 py-2.5 font-semibold bg-blue-500 text-white'>Get started</button>
        </slot>
      </StyledHost>
    );
  }

}
