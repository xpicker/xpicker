import  "../styles/main.css"

import Vue from 'vue'
import App from '../components/account/app.vue'
import i18n from '../lib/i18n.js'

Vue.prototype.i18n = i18n

new Vue({
    el: '#app',
    render: createElement => createElement(App)
})