import {
    FC,
    ReactNode,
} from 'react';
import { PaginationProps } from '@components/Pagination/types.ts';

const Pagination: FC<PaginationProps> = ({
    count,
    currentPage,
    onPageChange = () => null,
    itemsPerPage,
}) => {
    const totalPages: number = Math.ceil(count / itemsPerPage);
    const isFirstPage: boolean = currentPage === 1;
    const isLastPage: boolean = currentPage === totalPages;

    const handlePrevPage = () => {
        onPageChange(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage <= totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    let isPageNumberOutOfRange: boolean;

    const pageNumbers: Array<ReactNode> = [...new Array(totalPages)]
        .map((_, idx): ReactNode => {
            const pageNumber: number = idx + 1;
            const isPageNumberFirst: boolean = pageNumber === 1;
            const isPageNumberLast: boolean = pageNumber === totalPages;
            const isCurrentPageWithinTwoPageNumbers: boolean
                = Math.abs(pageNumber - currentPage) <= 1;

            if (
                isPageNumberFirst
                || isPageNumberLast
                || isCurrentPageWithinTwoPageNumbers
            ) {
                const isSelected: boolean = pageNumber === currentPage;

                isPageNumberOutOfRange = false;

                return (
                    <span
                        aria-label={`page ${pageNumber}`}
                        onClick={() => onPageChange(pageNumber)}
                        className={`rv-p-1 rv-rounded-full rv-flex rv-justify-center rv-items-center rv-border rv-w-[30px] rv-h-[30px] rv-text-xs rv-text-center rv-cursor-pointer ${isSelected
                            ? 'rv-bg-slate-200 rv-text-black'
                            : 'rv-bg-transparent'}`}
                        key={`react-viper-pagination-${pageNumber}`}
                    >
                        {pageNumber}
                    </span>
                );
            }

            if (!isPageNumberOutOfRange) {
                isPageNumberOutOfRange = true;

                return (
                    <span key={`react-viper-ellipsis-pagination-${Math.random()}`}>
                        ...
                    </span>
                );
            }

            return null;
        });

    return (
        <div
            aria-label='pagination'
            className='rv-flex rv-items-center rv-gap-3 rv-w-full rv-justify-center rv-py-4 rv-px-6 md:rv-justify-end'
        >

            <button
                aria-label='previous page'
                role='navigation'
                disabled={isFirstPage}
                onClick={handlePrevPage}
                className='rv-p-1 rv-bg-light rv-rounded rv-text-white hover:rv-bg-secondary disabled:rv-bg-gray-300'
            >
                <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z' />
                </svg>
            </button>

            {pageNumbers}

            <button
                aria-label='next page'
                role='navigation'
                disabled={isLastPage}
                onClick={handleNextPage}
                className='rv-p-1 rv-bg-light rv-rounded rv-text-white hover:rv-bg-secondary disabled:rv-bg-gray-300'
            >
                <svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'>
                    <path fill='currentColor' d='M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6z' />
                </svg>
            </button>

        </div>
    );
};

export default Pagination;
