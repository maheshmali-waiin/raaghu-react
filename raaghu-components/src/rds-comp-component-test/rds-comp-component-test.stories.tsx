import React from 'react';
        import { Story, Meta } from '@storybook/react';
        import RdsCompComponentTest from './rds-comp-component-test';

        export default {
        title: 'Components/RdsCompComponentTest',
        component: RdsCompComponentTest,
        } as Meta;

        const Template: Story<{}> = (args) => <RdsCompComponentTest {...args} />;

        export const Default = Template.bind({});
        Default.args = {};