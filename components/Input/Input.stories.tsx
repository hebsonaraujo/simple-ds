import type { Meta, StoryObj } from '@storybook/react';
import Input, {InputProps} from './Input';

const meta: Meta<InputProps> = {
    title: 'Desing System/Molecules/Input',
    component: Input,
    argTypes: {
        disabled: {
            type: "boolean"
        },
        className: {
            type: "string"
        },
        multiline: {
            type: "boolean"
        },
        attrs: {
            placeholder: "string"
        }
    }
};
export default meta;

type Story = StoryObj<InputProps>;

export const Primary: Story = {
    args: {
        multiline: false,
        attrs: {
            placeholder: 'Input field'
        },
    }
};
export const PrimaryDisabled: Story = {
    args: {
        multiline: false,
        attrs: {
            placeholder: 'PlaceHolder',
            disabled: true
        },
    }
};
export const PrimaryLabel: Story = {
    args: {
        children: 'Hello World!',
        multiline: false,
        label: 'Label',
        labelRequirement: '(optional) *',
        labelHelper: 'helptext',
        attrs: {
            placeholder: 'PlaceHolder',
        },
    }
};
export const PrimaryLabelDisabled: Story = {
    args: {
        children: 'Hello World!',
        multiline: false,
        label: 'Label',
        labelRequirement: '(optional) *',
        attrs: {
            placeholder: 'PlaceHolder',
            disabled: true
        },
    }
};
export const Multiline: Story = {
    args: {
        multiline: true,
        attrs: {
            placeholder: 'PlaceHolder'
        },
    }
};
export const MultilineDisabled: Story = {
    args: {
        multiline: true,
        attrs: {
            placeholder: 'PlaceHolder',
            disabled: true
        },
    }
};
export const Multilinelabel: Story = {
    args: {
        multiline: true,
        label: 'Label',
        labelRequirement: '(optional) *',
        attrs: {
            placeholder: 'PlaceHolder',
        },
    }
};
export const MultilinelabelDesabled: Story = {
    args: {
        multiline: true,
        label: 'Label',
        labelRequirement: '(optional) *',
        attrs: {
            placeholder: 'PlaceHolder',
            disabled: true
        },
    }
};