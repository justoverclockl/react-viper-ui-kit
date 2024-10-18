import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Pagination from '@components/Pagination/index.tsx';

describe('Test React Viper Pagination component', () => {
    it('should render the pagination component elements', () => {
        const onPageChangeMock = jest.fn();
        const { getAllByRole, getByText } = render(
            <Pagination
                currentPage={1}
                count={194}
                itemsPerPage={10}
                onPageChange={onPageChangeMock}
            />,
        );

        const previousAndNextPageButton = getAllByRole('navigation');
        const pageNumberOneElements = getByText('1');
        const pageNumberTwoElements = getByText('2');
        const pageNumberTwentyElements = getByText('20');

        expect(previousAndNextPageButton[0])
            .toHaveAttribute('aria-label', 'previous page');

        expect(previousAndNextPageButton[1])
            .toHaveAttribute('aria-label', 'next page');

        expect(pageNumberOneElements)
            .toBeInTheDocument();
        expect(pageNumberTwoElements)
            .toBeInTheDocument();
        expect(pageNumberTwentyElements)
            .toBeInTheDocument();
    });
});
