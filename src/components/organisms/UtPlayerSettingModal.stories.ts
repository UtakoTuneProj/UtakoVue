import UtPlayerSettingModal from './UtPlayerSettingModal.vue';
import { withKnobs } from '@storybook/addon-knobs';

export default {
    title: 'organisms/UtPlayerSettingModal',
    component: UtPlayerSettingModal,
    decorators: [withKnobs],
};

export const basic = () => ({
    components: { UtPlayerSettingModal },
    template: `
        <UtPlayerSettingModal />
    `,
});
