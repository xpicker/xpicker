import  "styles/main.css"

import Vue from 'vue'
import App from 'components/account/app'
import i18n from 'lib/i18n'

Vue.prototype.i18n = i18n

new Vue({
    el: '#app',
    render: createElement => createElement(App)
})