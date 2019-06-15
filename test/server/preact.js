import {
  Header,
  Text
} from '!!style-loader!../../lib/preact!css-loader?modules=true!./style.css'
import { Fragment, h, render } from 'preact'

render(
  h(
    Fragment,
    null,
    h(Header, { tag: 'h1', size: 'large' }, 'Hello, world!'),
    h(
      Text,
      { tag: 'p', italic: true },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )
  ),
  document.getElementById('root')
)
