import { FC } from 'react';
import { CardDescriptionProps } from './types.ts';

const CardDescription: FC<CardDescriptionProps> = ({ description }) => {
    const descriptionText = description
        ? description
        : 'No description detected';

    return (
        <div className='rv-mt-1'>
            <span className='rv-text-gray-600 rv-text-sm rv-line-clamp-2'>
                {descriptionText}
            </span>
        </div>
    );
};

export default CardDescription;
