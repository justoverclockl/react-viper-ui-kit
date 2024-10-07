import type { Meta } from '@storybook/react';
import Skeleton from '../../lib/components/Skeleton';
import SkeletonAvatar from '../../lib/components/Skeleton/partials/SkeletonAvatar';
import SkeletonImage from '../../lib/components/Skeleton/partials/SkeletonImage';
import SkeletonLine from '../../lib/components/Skeleton/partials/SkeletonLine';

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    // @ts-expect-error
    subcomponents: { SkeletonImage, SkeletonAvatar, SkeletonLine },
} satisfies Meta<typeof Skeleton>;

export default meta;

const Template = () => (
    <div className='rv-p-4 rv-w-[300px]'>
        <Skeleton>
            <SkeletonAvatar width={35} height={35} />
            <SkeletonImage />
            <SkeletonLine
                schema={['full', 'full', 'full', 'medium']}
            />
        </Skeleton>
    </div>
);

export const Default = Template.bind({});

export const NoImage = () => (
    <div className='rv-p-4 rv-w-[300px]'>
        <Skeleton>
            <SkeletonAvatar />
            <SkeletonLine
                schema={['full', 'full', 'full', 'medium']}
            />
        </Skeleton>
    </div>
);

export const NoAvatarAndTwoLines = () => (
    <div className='rv-p-4 rv-w-[300px]'>
        <Skeleton>
            <SkeletonImage />
            <SkeletonLine
                schema={['full', 'medium']}
            />
        </Skeleton>
    </div>
);

export const JustLines = () => (
    <div className='rv-p-4 rv-w-[300px]'>
        <Skeleton>
            <SkeletonLine
                schema={['full', 'full', 'full', 'full', 'medium']}
            />
        </Skeleton>
    </div>
);
