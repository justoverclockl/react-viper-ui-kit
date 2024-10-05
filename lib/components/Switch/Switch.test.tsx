import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Switch from './index.tsx';
import {
    ChangeEvent,
    useState,
} from 'react';
import { fireEvent } from '@storybook/test';

describe('test React Viper Ui Switch', () => {
    it('should toggle between checked and unchecked correctly', () => {
        const Wrapper = () => {
            const [isChecked, setIsChecked] = useState(false);

            const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                setIsChecked(e.target.checked);
            };

            return (
                <Switch
                    checked={isChecked}
                    onChange={handleChange}
                />
            );
        };

        const { getByRole } = render(
            <Wrapper />,
        );

        const switchElement = getByRole('switch');

        expect(switchElement)
            .not.toBeChecked();

        fireEvent.click(switchElement);

        expect(switchElement)
            .toBeChecked();
    });

    it('should not be clickable when disabled', () => {
        const Wrapper = () => {
            const [isChecked, setIsChecked] = useState(false);

            const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                setIsChecked(e.target.checked);
            };

            return (
                <Switch
                    disabled={true}
                    checked={isChecked}
                    onChange={handleChange}
                />
            );
        };

        const { getByRole } = render(
            <Wrapper />,
        );

        const switchElement = getByRole('switch');

        expect(switchElement)
            .not.toBeChecked();

        fireEvent.click(switchElement);

        expect(switchElement)
            .not.toBeChecked();
    });
});
