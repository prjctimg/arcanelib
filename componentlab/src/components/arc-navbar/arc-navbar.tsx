import { Component, h, Prop } from '@stencil/core';
import { StyledHost } from '../../utils/styled-host';
import { ArcSearch } from '../arc-search/arc-search';
//Add icon library  pref. hero icons.

export type Colors = {
  info: 'text-blue-700 bg-blue-100 border-blue-500 dark:bg-blue-200 dark:text-blue-800',
  gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
  failure: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
  success: 'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
  warning: 'text-yellow-700 bg-yellow-100 border-yellow-500, dark:bg-yellow-200 dark:text-yellow-800'

}


@Component({
  tag: 'arc-navbar',
  shadow: true
})
export class ArcHeader {

  @Prop() color: Colors

  render() {
    return (
      <StyledHost>
        <nav class={`navbar  text-black  bg-gray-400 w-screen`}>
          <h2 class={`text-lg text-gray-800 font-sans px-2`}>E-learning</h2>

          {/* Search input container. */}
          <div class="mx-auto w-fit space-x-2 px-2 py-2.5">
            <input class={`input input-ghost rounded-full placeholder:text-gray-700`} type="search" placeholder='Search...' />
            <button class={`btn rounded-full px-2 py-2.5 bg-black text-white hover:bg-slate-700`} type="submit">Icon</button>
          </div>
        </nav>

      </StyledHost>
    );
  }

}
