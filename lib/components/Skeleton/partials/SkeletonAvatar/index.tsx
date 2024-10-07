import { FC } from 'react';
import { SkeletonAvatarProps } from './types.ts';
import SkeletonLine from '../SkeletonLine';

const SkeletonAvatar: FC<SkeletonAvatarProps> = ({
    width = 48,
    height = 48,
}) => {
    return (
        <div className='rv-flex rv-gap-3 rv-w-full'>
            <div
                role='status'
                aria-hidden='true'
                style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px` }}
                className='rv-rounded-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500'
            />
            <div
                role='status'
                aria-hidden='true'
                className='rv-flex rv-flex-col rv-gap-3 rv-h-auto rv-w-full rv-justify-center'
            >
                <SkeletonLine size='medium' />
                <SkeletonLine size='small' />
            </div>
        </div>
    );
};

export default SkeletonAvatar;
