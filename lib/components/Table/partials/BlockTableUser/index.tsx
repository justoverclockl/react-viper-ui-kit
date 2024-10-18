import { FC } from 'react';
import { BlockTableUserProps } from './types.ts';

const BlockTableUser: FC<BlockTableUserProps> = ({
    title,
    tagLine,
    img,
}) => {
    return (
        <td className='rv-border-t-0 rv-px-6 rv-align-middle rv-text-sm rv-whitespace-nowrap rv-p-4 rv-text-left rv-flex rv-items-center rv-mr-6'>
            <img
                role='img'
                aria-label={title}
                src={img}
                alt={title}
                className='rv-w-10 rv-h-10 rv-rounded-full rv-border-2 rv-border-blueGray-50 rv-shadow'
            />
            <div className='rv-flex rv-flex-col'>
                <span className='rv-ml-3 rv-font-bold'>{title}</span>
                <span className='rv-ml-3 rv-text-[12px]'>{tagLine}</span>
            </div>
        </td>
    );
};

export default BlockTableUser;
