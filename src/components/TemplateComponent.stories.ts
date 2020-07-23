import TemplateComponent from './TemplateComponent.vue';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'TemplateComponent',
    component: TemplateComponent,
    decorators: [withKnobs],
};

export const basic = () => ({
    components: { TemplateComponent },
    template: `
        <TemplateComponent />
    `,
});
