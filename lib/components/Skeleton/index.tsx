import SkeletonAvatar from './partials/SkeletonAvatar';
import SkeletonLine from './partials/SkeletonLine';

const Skeleton = () => {
    return (
        <div className='rv-flex rv-items-start rv-gap-3 rv-flex-col rv-w-full rv-p-2'>
            <SkeletonAvatar />
            <SkeletonLine size='full' />
            <SkeletonLine size='full' />
            <SkeletonLine size='medium' />
            <SkeletonLine size='small' />
        </div>
    );
};

export default Skeleton;
