import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RdsCompProjectDetail from './rds-comp-project-detail';

const meta: Meta<typeof RdsCompProjectDetail> = {
    title: 'Components/ProjectDetail',
    component: RdsCompProjectDetail,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        // Define the props and controls for the component here
    },
} satisfies Meta<typeof RdsCompProjectDetail>;

export default meta;
type Story = StoryObj<typeof RdsCompProjectDetail>;

export const Default: Story = {
        args: {
                item: {
                    imageUrl: "https://t4.ftcdn.net/jpg/04/10/43/77/240_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg",
                   
                }
            }
};