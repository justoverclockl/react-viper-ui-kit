import { FC } from 'react';
import { SkeletonImageProps } from './types.ts';

const SkeletonImage: FC<SkeletonImageProps> = ({ height = 150 }) => {
    return (
        <div
            role='status'
            aria-hidden='true'
            style={{ height: `${height}px` }}
            className='rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-w-full'
        />
    );
};

export default SkeletonImage;
