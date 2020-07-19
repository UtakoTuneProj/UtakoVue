import Vue from 'vue';
import Vuetify, {VApp} from 'vuetify/lib';
import vuetify from '../src/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import { addDecorator } from '@storybook/vue';

import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

Vue.use(Vuetify);
Vue.component('v-app', VApp);

addDecorator(() => ({
    vuetify,
    template: `<v-app><story/></v-app>`
}));