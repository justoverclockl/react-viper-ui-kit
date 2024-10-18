import {
    FC,
    useMemo,
} from 'react';
import { TableHeadProps } from './types.ts';
import { cn } from '@utils/cn.ts';

const TableHead: FC<TableHeadProps> = ({ data, dark }) => {
    const theme: string = dark
        ? 'rv-bg-gray-800 rv-text-white '
        : 'rv-bg-slate-100 rv-text-gray-700 rv-border rv-border-solid';

    const headingsData: Array<string> = useMemo((): Array<string> => {
        return Object.keys(data[0])
            .map(key => key);
    }, [data]);

    return (
        <thead className={cn(theme, '')}>
            <tr className={cn(theme, '')}>
                {headingsData.length > 0 && headingsData.map((heading, idx) => (
                    <th
                        key={`rv-table-heading-${idx}`}
                        className={cn(theme, 'rv-px-6 rv-align-middle rv-py-3 rv-text-xs rv-uppercase rv-border-l-0 rv-border-r-0 rv-whitespace-nowrap rv-font-semibold rv-text-left')}
                    >
                        {heading}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default TableHead;
