import React from 'react';
        import { Story, Meta } from '@storybook/react';
        import TimePicker from './rds-time-picker';

        export default {
        title: 'Elements/Time Picker',
        component: TimePicker,
        parameters: {
                layout: 'padded',
            },
            tags: ['autodocs'],
        argTypes: {
                colorVariant: {
                    options: [
                        "primary",
                        "secondary",
                        "success",
                        "danger",
                        "warning",
                        "info",
                        "light",
                        "dark",
                        "white",
                    ],
                    control: { type: "select" },
                },
                style: {
                        options: [
                                "default",
                                "compact",
                        ],
                        control: { type: "select" },
                },
                state: {
                        options: [
                                "default",
                                "expanded",
                                "selected"
                        ],
                        control: { type: "select" },
                }
            },
        } as Meta;

        const Template: Story<{}> = (args) => <TimePicker {...args} />;

        export const Default = Template.bind({});
        Default.args = {
                colorVariant: "primary",
                style: "default",
                state: "default"
        };
        Default.parameters = { controls: { include: ['colorVariant','style','state'] } };