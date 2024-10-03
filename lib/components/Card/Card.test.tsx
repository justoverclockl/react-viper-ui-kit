import '@testing-library/jest-dom';
import {
    act,
    render,
} from '@testing-library/react';
import Card from './index.tsx';
import { fireEvent } from '@storybook/test';

describe('Test React Viper UI Card', () => {
    it('should render card with default props', () => {
        const cardProps = {
            title: 'Card title',
            description: 'card Description',
        };
        const { getByRole, getByText } = render(
            <Card
                title={cardProps.title}
                description={cardProps.description}
            />,
        );

        const cardTitle = getByText(cardProps.title);
        const cardImage = getByRole('img');

        expect(cardTitle)
            .toBeInTheDocument();

        expect(cardImage)
            .toHaveAttribute('src', 'https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!');
    });

    it('should fire a function at selection/unselection once', () => {
        const selectedClickHandler = jest.fn();
        const cardProps = {
            title: 'Card title',
            description: 'card Description',
        };

        const { getByRole } = render(
            <Card
                onCardSelect={selectedClickHandler}
                title={cardProps.title}
                description={cardProps.description}
            />,
        );

        const toggleIcon = getByRole('switch');

        expect(toggleIcon)
            .toHaveAttribute('aria-selected', 'false');

        act(() => {
            fireEvent.click(toggleIcon);
        });

        expect(toggleIcon)
            .toHaveAttribute('aria-selected', 'true');
        expect(selectedClickHandler)
            .toHaveBeenCalledTimes(1);
    });
});
