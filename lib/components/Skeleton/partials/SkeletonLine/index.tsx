import { FC } from 'react';
import { SkeletonLineProps } from './types.ts';

const SkeletonLine: FC<SkeletonLineProps> = ({ size }) => {
    const getSkeletonLineSize = () => {
        switch (size) {
            case 'small': {
                return '33%';
            }
            case 'medium': {
                return '50%';
            }
            case 'full': {
                return '100%';
            }
            default: {
                return '100%';
            }
        }
    };

    return (
        <div
            style={{ width: getSkeletonLineSize() }}
            className='rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-6'
        />
    );
};

export default SkeletonLine;
