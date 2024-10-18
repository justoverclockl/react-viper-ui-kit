export interface PaginationProps {
    /**
     * The currently active page number.
     * This value should be between 1 and the total number of pages.
     */
    currentPage: number
    /**
     * The number of total items retrieved.
     */
    count: number
    /**
     * The number of items to skip.
     */
    itemsPerPage: number

    /**
     * Callback function triggered when the page changes.
     * Receives the new page number as an argument.
     */
    onPageChange: ((value: number) => void) | undefined
}
