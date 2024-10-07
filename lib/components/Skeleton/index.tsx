import { FC } from 'react';
import { SkeletonProps } from './types.ts';

const Skeleton: FC<SkeletonProps> = ({ children }) => {
    return (
        <div
            aria-busy='true'
            aria-live='polite'
            className='rv-flex rv-items-start rv-gap-4 rv-flex-col rv-w-full'
        >
            {children}
        </div>
    );
};

export default Skeleton;
