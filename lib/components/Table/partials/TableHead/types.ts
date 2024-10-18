import { GenericTableData } from '../../types.ts';

export interface TableHeadProps {
    /**
     * The data to be displayed in the table.
     * This is a generic array of objects, allowing for flexibility in the data structure.
     */
    data: Array<GenericTableData>
    /**
     * Boolean flag to determine whether the table should be rendered in dark mode.
     */
    dark: boolean
}
