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
    return (
        <>
            <img
                role='img'
                className={cn('rv-h-64 rv-w-full rv-object-cover rv-object-bottom rv-rounded-lg rv-shadow-lg rv-relative', className)}
                src={img}
                alt={alt}
                {...props}
            />
            <div
                onClick={toggleSelected}
                role='switch'
                aria-selected={isSelected}
                className={cn(
                    'rv-absolute rv-left-2 rv-top-1 rv-z-10 rv-w-[30px] rv-h-[30px] rv-cursor-pointer',
                    isSelected
                        ? 'rv-text-white rv-opacity-100'
                        : 'rv-opacity-35',
                )}
            >
                <BadgeCheck
                    stroke='#fff'
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
