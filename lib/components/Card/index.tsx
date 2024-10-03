import {
    FC,
    useState,
} from 'react';
import CardFeaturedBadge from './partials/CardFeaturedBadge/CardFeaturedBadge.tsx';
import CardImage from './partials/CardImage/CardImage.tsx';
import CardContent from './partials/CardContent/CardContent.tsx';
import CardContentHeader from './partials/CardContentHeader/CardContentHeader.tsx';
import CardTitle from './partials/CardTitle/CardTitle.tsx';
import CardDescription from './partials/CardDescription/CardDescription.tsx';
import CardContentWrapper from './partials/CardContentWrapper/CardContentWrapper.tsx';
import { CardProps } from './types.ts';

const Card: FC<CardProps> = ({
    isFeatured = false,
    isSelected = false,
    title,
    img = 'https://placehold.jp/35/ededed/bdbdbd/600x400.jpg?text=No%20image%20detected!',
    description,
    tagLabel,
    tagDescription,
    onCardSelect,
    onCardClick,
}) => {
    const [selectedState, setSelectedState] = useState(isSelected);

    const onClickToggleSelected = () => {
        setSelectedState(!selectedState);
        if (onCardSelect) {
            onCardSelect();
        }
    };

    return (
        <div
            onClick={onCardClick}
            data-card-selected={selectedState}
            className='rv-max-w-[400px] rv-w-full rv-relative rv-overflow-hidden rv-rounded hover:rv-transform hover:rv-scale-95 rv-transition-transform rv-duration-300 rv-ease-in-out'
        >
            <CardFeaturedBadge
                isFeatured={isFeatured}
            />
            <CardContentWrapper>
                <CardImage
                    isSelected={selectedState}
                    toggleSelected={onClickToggleSelected}
                    img={img}
                    alt={title}
                />
                <CardContent>
                    {tagLabel && tagDescription && (
                        <CardContentHeader
                            tagLabel={tagLabel}
                            tagDescription={tagDescription}
                        />
                    )}
                    <CardTitle
                        title={title || 'No title Detected'}
                    />
                    <CardDescription
                        description={description}
                    />
                </CardContent>
            </CardContentWrapper>
        </div>
    );
};

export default Card;
