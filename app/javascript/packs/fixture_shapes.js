/* eslint no-console: 0 */
// Run this by adding <%= javascript_pack_tag 'fixture_shapes' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

import Vue from 'vue'
import App from './fixture_shape.vue'

document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(document.createElement('fixture_shape'))
const app = new Vue(App).$mount('fixture_shape')

})
