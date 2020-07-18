import Vue from 'vue';
import Vuetify, { VApp, VBtn } from 'vuetify/lib';
import vuetify from '../src/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify)

import { addDecorator } from '@storybook/vue';

addDecorator(() => ({
    vuetify,
    template: `<v-app><story/></v-app>`
}));
// configure(require.context('../src', true, /\.stories\.ts$/), module);