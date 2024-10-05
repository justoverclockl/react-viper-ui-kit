import { fn } from '@storybook/test';
import type {
    Meta,
    StoryObj,
} from '@storybook/react';
import Card from '../../lib/components/Card';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: {
        img: 'https://images.pexels.com/photos/16280923/pexels-photo-16280923/free-photo-of-moda-arte-salute-canon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        tagLabel: 'beauty',
        tagDescription: 'Skin care best seller!',
        title: 'New Skin care collection',
        description: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
        onCardClick: fn(),
        isFeatured: true,
        isSelected: false,
        onCardSelect: fn(),
    },
};
