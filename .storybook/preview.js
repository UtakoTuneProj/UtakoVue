import vuetify from '../src/plugins/vuetify';
import 'vuetify/dist/vuetify.min.css';
import { addDecorator } from '@storybook/vue';

addDecorator(() => ({
    vuetify,
    template: `<v-app><story/></v-app>`
}));
// configure(require.context('../src', true, /\.stories\.ts$/), module);