import { FC } from 'react';
import { SkeletonAvatarProps } from './types.ts';

const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
    width = 48,
    height = 48,
}) => {
    return (
        <div
            style={{ width: `${width}px`, height: `${height}px` }}
            className='rv-rounded-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500'
        />
    );
};

export default SkeletonAvatar;
