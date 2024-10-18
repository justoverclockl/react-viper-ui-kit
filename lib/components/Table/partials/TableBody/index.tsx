import { FC } from 'react';
import { TableBodyProps } from './types.ts';
import { cn } from '@utils/cn.ts';
import { getBlock } from '../../utils/getBlock.tsx';

const TableBody: FC<TableBodyProps> = ({ data, dark }) => {
    const theme: string = dark
        ? 'odd:rv-bg-gray-700'
        : 'odd:rv-bg-slate-200';

    return (
        <tbody>
            {data
                .map((row, idx) => (
                    <tr
                        key={`rv-table-tr-${idx}`}
                        className={cn(theme, '')}
                    >
                        {Object
                            .entries(row)
                            .map(([key, value], i) => getBlock(key, value, i))}
                    </tr>
                ))}
        </tbody>
    );
};

export default TableBody;
