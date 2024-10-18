import { FC } from 'react';
import { TableCaptionProps } from './types.ts';

const TableCaption: FC<TableCaptionProps> = ({ label }) => {
    return (
        <caption className='rv-py-3 rv-self-start rv-text-left rv-ml-6 rv-font-bold'>
            {label}
        </caption>
    );
};

export default TableCaption;
