import { PaginationLocale } from '@components/Pagination/types.ts';

export interface TableProps {
    /**
     * The data to be displayed in the table.
     * This is a generic array of objects, allowing for flexibility in the data structure.
     */
    data: GenericTableData[]

    /**
     * Optional boolean flag to enable dark mode styling for the table.
     * If `true`, the table will be styled with a dark theme.
     * Defaults to `false` if not provided.
     */
    dark?: boolean

    /**
     * Optional boolean flag to indicate whether to display a caption for the table.
     * If `true`, a caption will be rendered for the table.
     * Defaults to `false` if not provided.
     */
    withCaption?: boolean

    /**
     * A string that provides the text for the table's caption.
     * This is used if `withCaption` is `true`.
     */
    captionText?: string

    /**
     * Optional boolean flag to enable pagination for the table.
     * If `true`, the table will support paginated views.
     */
    paginated?: boolean

    /**
     * Optional locale setting for pagination.
     * This will determine the language or localization of the pagination controls.
     */
    paginationLocale?: PaginationLocale

    /**
     * The current page number being displayed in the paginated table.
     * This value is used for pagination control.
     */
    currentPage?: number

    /**
     * The maximum number of items (rows) to display per page.
     * This value controls the number of data entries visible on each page.
     */
    limit: number

    /**
     * The total number of items available in the dataset.
     * Used to calculate the total number of pages for pagination.
     */
    totalItems: number

    /**
     * Callback function that is triggered when the page changes in a paginated table.
     * It receives the new page number as an argument.
     */
    onPageChange?: (value: number) => void
}

export type GenericTableData<T extends object = object> = T & Record<string, unknown>;
