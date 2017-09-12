import Vue from 'vue'
import VueScrollClass from 'vue-scroll-class'

const app = new Vue({ // eslint-disable-line no-unused-vars
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  directives: {
    'scroll-class': VueScrollClass
  }
})
