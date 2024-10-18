import { FC } from 'react';
import { BlockTableBadgeProps } from './types.ts';

const BlockTableBadge: FC<BlockTableBadgeProps> = ({ label }) => {
    return (
        <td className='rv-border-t-0 rv-px-6 rv-align-middle rv-border-l-0 rv-border-r-0 rv-text-sm rv-whitespace-nowrap rv-p-4'>
            <span className='rv-bg-light rv-px-2 rv-text-xs rv-py-0.5 rv-rounded-md rv-text-white rv-uppercase'>
                {label}
            </span>
        </td>
    );
};

export default BlockTableBadge;
