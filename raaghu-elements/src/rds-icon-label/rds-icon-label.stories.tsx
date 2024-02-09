import React from "react";
import RdsIconLabel from "./rds-icon-label";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: 'Elements/Icon Label',
  component: RdsIconLabel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    colorVariant: {
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
        "light",
      ],
      control: { type: "select" },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    },
  },
} satisfies Meta<typeof RdsIconLabel>;

export default meta;
type Story = StoryObj<typeof RdsIconLabel>;

export const Default: Story = {
  args: {
    label: "User Name",
    icon: "users",
    size: "medium",
    colorVariant: "primary",
  }
} satisfies Story;

export const WithPosition: Story = {
  args: {
    label: "User Name",
    icon: "users",
    size: "medium",
    iconposition: "left",
    colorVariant: "primary",
  }
} satisfies Story;

