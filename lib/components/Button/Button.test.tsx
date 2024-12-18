import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './index.tsx';

describe('Test React Viper UI Button', () => {
    it('should render button with label', () => {
        const title = 'Default Button';
        const { getByRole } = render(
            <Button variant='primary'>{title}</Button>,
        );

        const buttonElement = getByRole('button');

        expect(buttonElement)
            .toHaveTextContent(title);
        expect(buttonElement)
            .toHaveClass('rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30 rv-text-white rv-bg-primary hover:rv-text-white rv-w-fit rv-px-10 rv-py-4');
    });

    it('should render the button with secondary styles', () => {
        const title = 'Secondary Button';
        const { getByRole } = render(
            <Button variant='secondary'>
                {title}
            </Button>,
        );
        const buttonElement = getByRole('button');

        expect(buttonElement)
            .toHaveClass('rv-w-full rv-relative rv-inline-flex rv-items-center rv-justify-center rv-overflow-hidden rv-tracking-tighter rv-font-bold rv-rounded-lg rv-group disabled:rv-opacity-30 rv-px-10 rv-text-tsecondary rv-bg-secondary hover:rv-text-white rv-w-fit rv-px-10 rv-py-4');
    });
});
