import { FC } from 'react';
import { SkeletonLineProps } from './types.ts';
import { getSkeletonLineSize } from '../../utils/styles.ts';

const SkeletonLine: FC<SkeletonLineProps> = ({ size = '100%', schema = [] }) => {
    const isSchemaDefined: boolean = Boolean(!schema.length);

    return (
        <>
            {isSchemaDefined
                ? (
                    <div
                        role='status'
                        aria-hidden='true'
                        style={{ width: getSkeletonLineSize(size) }}
                        className='rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2'
                    />
                )
                : (
                    <>
                        {schema.map((sl, idx) => (
                            <div
                                key={`skeleton-line-${idx}`}
                                role='status'
                                aria-hidden='true'
                                style={{ width: getSkeletonLineSize(sl) }}
                                className='rv-rounded rv-w-full rv-bg-gray-200 rv-animate-pulse rv-opacity-30 dark:rv-bg-gray-500 rv-h-2'
                            />
                        ))}
                    </>
                )}
        </>
    );
};

export default SkeletonLine;
