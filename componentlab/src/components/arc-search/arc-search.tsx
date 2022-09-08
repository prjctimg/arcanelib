import { Component, h } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';

@Component({
  tag: 'arc-search',
  styleUrl: 'arc-search.css',
  shadow: true,
})
export class ArcSearch {

  render() {
    return (

      <StyledHost>
        <div class=" w-fit space-x-2 px-2 py-2.5">
          <input class={`input input-ghost rounded-full placeholder:text-gray-700`} type="search" placeholder='Search...' />
          <button class={`btn rounded-full px-2 py-2.5 bg-black text-white hover:bg-slate-700`} type="submit">Icon</button>
        </div>
      </StyledHost>
    );
  }

}
