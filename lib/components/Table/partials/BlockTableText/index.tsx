import { FC } from 'react';
import { BlockTableTextProps } from './types.ts';

const BlockTableText: FC<BlockTableTextProps> = ({ text }) => {
    return (
        <td className='rv-border-t-0 rv-px-6 rv-align-middle rv-border-l-0 rv-border-r-0 rv-text-sm rv-whitespace-nowrap rv-p-4'>
            <span>
                {text}
            </span>
        </td>
    );
};

export default BlockTableText;
