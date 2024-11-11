import type { Meta, StoryObj } from '@storybook/react';
import Link, { LinkProps } from './Link'

const meta: Meta<LinkProps> = {
    title: 'Desing System/Molecules/Link',
    // tags: ['autodocs'],
    component: Link,
    argTypes:{
        children: {
            type: "string",
        },
        disabled: {
            type: "boolean"
        },
        href: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        title: {
            type:'string'
        }
    }
};
export default meta;

type Story = StoryObj<LinkProps>;

export const Primary: Story = {
    args: {
        children: 'My Link!',
        href: '/'
    }
};

export const Disabled: Story = {
    args: {
        children: 'My Link!',
        disabled: true,
        href: '/'
    }
};

