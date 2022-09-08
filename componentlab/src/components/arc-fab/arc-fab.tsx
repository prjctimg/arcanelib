import { Component, Host, h } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';

@Component({
  tag: 'arc-fab',
  shadow: true,
})
export class ArcFab {

  render() {
    return (
      <StyledHost>
        <button class="btn btn-circle text-white bg-black">FAB</button>
      </StyledHost>
    );
  }

}
