import Button from '../../lib/components/Button';
import { fn } from '@storybook/test';
import type {
    Meta,
    StoryObj,
} from '@storybook/react';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary',
        size: 'large',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outlined',
        size: 'large',
    },
};

export const Danger: Story = {
    args: {
        variant: 'danger',
        children: 'Danger',
        size: 'medium',
    },
};

export const SecondaryLoading: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary loading small',
        size: 'small',
        isLoading: true,
    },
};
