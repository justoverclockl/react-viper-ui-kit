import { action } from '@storybook/addon-actions';
import { withActions } from '@storybook/addon-actions/decorator';
import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import Switch from '../../lib/components/Switch';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: { layout: 'centered', actions: { handles: 'onChange' } },
    tags: ['autodocs'],
    decorators: [withActions],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {
    args: {
        onChange: action('switch-toggled'),
        disabled: false,
        label: 'Switch Label',
        /* @ts-expect-error: The action function expects a specific type that is currently not aligning with the provided argument type.
        This is a temporary workaround until we can align the types correctly. */
        checked: action('switch-toggled')(true),
    },
};
