import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './index.tsx';
import { BASE_BUTTON_CLASSES } from './constants.ts';

describe('Test React Viper UI Button', () => {
    it('should render button with label', () => {
        const title = 'Default Button';
        const { getByRole } = render(
            <Button>{title}</Button>,
        );

        const buttonElement = getByRole('button');

        expect(buttonElement)
            .toHaveTextContent(title);
        expect(buttonElement)
            .toHaveClass(`${BASE_BUTTON_CLASSES} rv-text-white rv-bg-secondary hover:rv-bg-secondary/70 rv-w-fit rv-px-10 rv-py-4`);
    });

    it('should render the button with primary styles', () => {
        const title = 'Primary Button';
        const { getByRole } = render(
            <Button primary>
                {title}
            </Button>,
        );
        const buttonElement = getByRole('button');

        expect(buttonElement)
            .toHaveClass('rv-text-white rv-bg-primary hover:rv-bg-primary/70');
    });
});
