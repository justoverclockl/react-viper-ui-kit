import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Button from './index.tsx';

describe('Test React Viper UI Button', () => {
    it('should render button with label', () => {
        const title = 'test button';
        const { getByText } = render(
            <Button>test button</Button>,
        );

        const titleElement = getByText(title);

        expect(titleElement)
            .toBeInTheDocument();
    });
});
