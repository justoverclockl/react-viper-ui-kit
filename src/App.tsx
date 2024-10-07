import './index.css';
import SkeletonAvatar from '../lib/components/Skeleton/partials/SkeletonAvatar';
import SkeletonLine from '../lib/components/Skeleton/partials/SkeletonLine';
import Skeleton from '../lib/components/Skeleton';
import SkeletonImage from '../lib/components/Skeleton/partials/SkeletonImage';

const App = () => {
    return (
        <div id='app'>
            <div className='rv-p-4 rv-w-[300px]'>
                <Skeleton>
                    <SkeletonAvatar />
                    <SkeletonImage />
                    <SkeletonLine
                        schema={['full', 'full', 'full', 'medium']}
                    />
                </Skeleton>
            </div>
        </div>
    );
};

export default App;
