import Vue from 'vue'
import { Header, Text } from './style.css'

new Vue({
  el: '#root',

  components: {
    'custom-header': Header,
    'custom-text': Text
  },

  template: `
    <main>
      <custom-header tag='h1' size='large'>Hello, world!</custom-header>
      <custom-text tag='p' italic='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</custom-text>
    </main>
  `
})
