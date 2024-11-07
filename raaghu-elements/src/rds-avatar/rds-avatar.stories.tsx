import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RdsAvatar from "./rds-avatar";

const colorVariantArgTypes = {

};

const textAlignArgTypes = {
    titleAlign: {
        options: ["horizontal", "vertical"],
        control: { type: "select" },
    },
};

const meta: Meta = {
    title: 'Elements/Avatar',
    component: RdsAvatar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        colorVariant: {
            options: [
                "primary",
                "success",
                "danger",
                "warning",
                "light",
                "info",
                "secondary",
                "dark",
            ],
            control: { type: "select" },
        },
        size: {
            options: ["smallest","small", "medium", "large","largest"],
            control: { type: "radio" },
        },
        type: {
            options: ["image", "initials","icon"],
            control: { type: "select" },
        },
        border: {
            options:["NoBorder","solid","dashed","dotted"],
            control: { type: "select" }
        }
    },
} satisfies Meta<typeof RdsAvatar>;

export default meta;
type Story = StoryObj<typeof RdsAvatar>;


export const Default: Story = {
    args: {
        size: "medium",
        border:"noBorder"
    }
} satisfies Story;
Default.parameters = { controls: { include: ['size','border'] } };


export const withInitials: Story = {
    args: {
        //colorVariant: "primary",
        firstName: "Wai",
        avtarOnly: false,
        avtarWithName: false,
        nameOnBottom: false,
        stackingAvatar: false,
        border:"noBorder",
        lastName: "Technologies",
        size: "medium",
    }
} satisfies Story;
withInitials.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'border'] } };


withInitials.argTypes = colorVariantArgTypes;


export const withIcon: Story = {
    args: {
        size: "small",
        avtarOnly: false,
        avtarWithName: false,
        nameOnBottom: false,
        stackingAvatar: false,
        //colorVariant: "primary",
        border:"noBorder",
        iconName:"Home",

    }
} satisfies Story;
withIcon.parameters = { controls: { include: ['size', 'iconName', 'border'] } };


export const withLabel: Story = {
    args: {
        //colorVariant: "primary",
        firstName: "Wai",
        lastName: "Technologies",
        avtarOnly: false,
        avtarWithName: false,
        nameOnBottom: false,
        stackingAvatar: false,
        size: "medium",
        isTitle: true,
        titleAlign: "horizontal",
        role: "Developer",
        border:"noBorder"
    }
} satisfies Story;
withLabel.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'isTitle', 'titleAlign', 'role', 'border'] } };


withLabel.argTypes = colorVariantArgTypes;
withLabel.argTypes = textAlignArgTypes;

export const withProfile: Story = {
    args: {
        size: "small",
        withProfilePic: true,
        avtarOnly: false,
        avtarWithName: false,
        nameOnBottom: false,
        stackingAvatar: false,
        firstName: "Wai",
        lastName: "Technologies",
        titleAlign: "horizontal",
        role: "Developer",
        //colorVariant: "primary",
        border:"noBorder",
        profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
    }
} satisfies Story;
withProfile.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'withProfilePic', 'titleAlign', 'role','border', 'profilePic'] } };


withProfile.argTypes = textAlignArgTypes;

export const Avatar_Only: Story = {
    args: {
        size: "large",
        avtarOnly: true,
        activeDotTop: true,
        activeDotBottom: true,
        activityChain : true,
        firstName: "Wai",
        lastName: "Technologies",
        titleAlign: "horizontal",
        role: "Developer",
        colorVariant: "primary",
        profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
    }
} satisfies Story;
Avatar_Only.parameters = { controls: { include: ['size', 'titleAlign', 'profilePic','colorVariant', 'activeDotTop','activeDotBottom','activityChain'] } };

export const Avatar_With_Name: Story = {
    args: {
        size: "large",
        avtarWithName: true,
        activeDotTop: true,
        activeDotBottom: true,
        activityChain : true,
        firstName: "Wai",
        lastName: "Technologies",
        titleAlign: "horizontal",
        role: "Developer",
        colorVariant: "primary",
        type: "image",
        profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
    }
} satisfies Story;
Avatar_With_Name.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'titleAlign', 'role', 'profilePic','colorVariant','activeDotTop','activeDotBottom','activityChain','type'] } };

export const Name_On_Bottom: Story = {
    args: {
        size: "large",
        activeDotTop: true,
        activeDotBottom: true,
        activityChain : true,
        nameOnBottom: true,
        firstName: "Wai",
        lastName: "Technologies",
        titleAlign: "horizontal",
        role: "Developer",
        colorVariant: "primary",
        profilePic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU",
    }
} satisfies Story;
Name_On_Bottom.parameters = { controls: { include: ['size', 'firstName', 'lastName', 'titleAlign', 'role', 'profilePic','colorVariant','activeDotTop','activeDotBottom','activityChain'] } };

const avatars = [
    // Example avatars data
    { profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU',  },
    { profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU', },
    { profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU', },
    { profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU', },
    { profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU', },
];
export const Stacking_Avatar_Only: Story = {
    args: {
        size: "large",
        stackingAvatar: true,
        titleAlign: "horizontal",
        maxVisibleAvatars: 3,
        avatars: avatars,
    }
} satisfies Story;
Stacking_Avatar_Only.parameters = { controls: { include: ['size', 'titleAlign', 'maxVisibleAvatars'] } };

