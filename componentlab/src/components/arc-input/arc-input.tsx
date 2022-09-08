import { Component, Host, h } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';

@Component({
  tag: 'arc-input',
  shadow: true,
})
export class ArcInput {

  render() {
    return (
      <StyledHost>
        <input class={`input input-bordered `} />
      </StyledHost>
    );
  }

}
