import TemplateComponent from './TemplateComponent.vue';
import { withKnobs } from '@storybook/addon-knobs';
import { actions } from '@storybook/addon-actions';

export default {
    title: 'TemplateComponent',
    component: TemplateComponent,
    decorators: [withKnobs],
};

export const basic = () => ({
    components: { TemplateComponent },
    props: {
        actions: {
            default: actions(
            ),
        },
    },
    template: `
        <TemplateComponent
            @click="onClick"
        />
    `,
});
