import { FC } from 'react';
import { CardContentHeaderProps } from './types.ts';

const CardContentHeader: FC<CardContentHeaderProps> = ({
    tagLabel,
    tagDescription,
}) => {
    return (
        <div className='rv-flex rv-items-baseline'>
            <span className='rv-inline-block rv-bg-secondary rv-text-white rv-text-xs rv-px-2 rv-rounded-full rv-uppercase'>
                {tagLabel}
            </span>
            <div className='rv-ml-2 rv-text-gray-600 rv-text-xs rv-uppercase rv-font-semibold rv-tracking-wider'>
                {tagDescription}
            </div>
        </div>
    );
};

export default CardContentHeader;
