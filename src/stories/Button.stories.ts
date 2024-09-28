import Button from "../../lib/components/Button";
import {fn} from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: {
        onClick: fn()
    }
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        children: "Button Primary",
    }
}

export const Secondary: Story = {
    args: {
        primary: false,
        children: "Button Secondary",
        size: 'large',
    }
}
