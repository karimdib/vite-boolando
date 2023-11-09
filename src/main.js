import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
    faUser,
    faHeart,
    faBagShopping,
    faCircleXmark,

} from '@fortawesome/free-solid-svg-icons'

library.add(
    faUser,
    faHeart,
    faBagShopping,
    faCircleXmark
)




createApp(App).component('awesome-icon', FontAwesomeIcon).mount('#app')
