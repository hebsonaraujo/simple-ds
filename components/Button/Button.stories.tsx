import type { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
    title: 'Desing System/Molecules/Button',
    component: Button,
    argTypes: {
        children: {
            type: "string",
        },
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
        variant: {
            options: ['primary', 'secondary-dark','secondary-light'],
            control: { type: 'radio' },
        }

    }
};
export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
    args: {
        children: 'Hello World!',
    }
};
export const Disabled: Story = {
    args: {
        children: 'Hello World!',
        disabled: true,
    }
};
export const SecondaryDark: Story = {
    args: {
        children: 'Hello World!',
        variant: 'secondary-dark'
    }
}
export const SecondaryDarkDisabled: Story = {
    args: {
        children: 'Hello World!',
        disabled: true,
        variant: 'secondary-dark'
    }
}
export const SecondaryLight: Story = {
    args: {
        children: 'Hello World!',
        variant: 'secondary-light'
    }
}
export const SecondaryLightDisabled: Story = {
    args: {
        children: 'Hello World!',
        disabled: true,
        variant: 'secondary-light'
    }
}



