import { HTMLAttributes, ReactNode } from 'react';
export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * A Valid children for the skeleton component
     *
     * can be SkeletonLine | SkeletonAvatar | SkeletonImage
     */
    children: ReactNode;
}
