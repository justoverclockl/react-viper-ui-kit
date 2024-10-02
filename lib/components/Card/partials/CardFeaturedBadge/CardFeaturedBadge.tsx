import { FC } from 'react';
import { CardFeaturedBadgeProps } from './types.ts';

const CardFeaturedBadge: FC<CardFeaturedBadgeProps> = ({ isFeatured, text }) => {
    const textToBeDisplayed = text
        ? text
        : 'featured';

    return (
        <>
            {isFeatured && (
                <div className='rv-absolute rv-top-[10px] rv-z-10 rv-right-[15px] rv-bg-primary rv-rounded rv-p-1 rv-uppercase rv-text-xs rv-text-tprimary'>
                    <span className='rv-font-bold rv-text-[10px] rv-flex rv-items-center'>
                        {textToBeDisplayed}
                    </span>
                </div>
            )}
        </>
    );
};

export default CardFeaturedBadge;
