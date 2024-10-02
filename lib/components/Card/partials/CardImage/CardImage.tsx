import { FC } from 'react';
import { CardImageProps } from './types.tsx';
import { cn } from '../../../../utils/cn.ts';
import { BadgeCheck } from 'lucide-react';

const CardImage: FC<CardImageProps> = ({
    img,
    alt,
    className,
    isSelected,
    toggleSelected,
    ...props
}) => {
    const cardImg = img
        ? img
        : 'https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!';

    return (
        <>
            <img
                role='img'
                className={cn('rv-h-64 rv-w-full rv-object-cover rv-object-bottom rv-rounded-lg rv-shadow-lg rv-relative', className)}
                src={cardImg}
                alt={alt}
                {...props}
            />
            <div
                onClick={toggleSelected}
                className={cn(
                    'rv-absolute rv-left-2 rv-top-1 rv-z-10 rv-w-[60px] rv-h-[60px] rv-cursor-pointer',
                    isSelected
                        ? 'rv-text-white rv-opacity-100'
                        : 'rv-opacity-35',
                )}
            >
                <BadgeCheck
                    fill={isSelected
                        ? '#1aa73f'
                        : '#333333'}
                    size={30}
                />
            </div>
        </>
    );
};

export default CardImage;
