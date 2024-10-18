import { FC } from 'react';
import {
    BlockStatusBadgeProps,
    StatusText,
} from './types.ts';
import { cn } from '../../../../utils/cn.ts';

const BlockStatusBadge: FC<BlockStatusBadgeProps> = ({ status }) => {
    const getStatusVariant = (actualStatus: StatusText) => {
        switch (actualStatus.toLowerCase()) {
            case 'active': {
                return 'rv-bg-light rv-text-white';
            }
            case 'pending': {
                return 'rv-bg-orange-400 rv-text-white';
            }
            case 'deleted':
            case 'rejected':
            case 'inactive': {
                return 'rv-bg-red-500 rv-text-white';
            }
            default: {
                return 'rv-bg-transparent rv-text-black';
            }
        }
    };

    const badgeVariant = getStatusVariant(status);

    return (
        <td className='rv-border-t-0 rv-bg-ora rv-px-6 rv-align-middle rv-border-l-0 rv-border-r-0 rv-text-sm rv-whitespace-nowrap rv-p-4'>
            <span className={cn(badgeVariant, 'rv-px-2 rv-text-xs rv-py-0.5 rv-rounded-md')}>
                {status}
            </span>
        </td>
    );
};

export default BlockStatusBadge;
