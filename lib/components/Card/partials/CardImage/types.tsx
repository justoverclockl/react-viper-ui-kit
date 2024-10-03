import { HTMLAttributes } from 'react';

export interface CardImageProps extends HTMLAttributes<HTMLImageElement> {
    /**
     * The source URL of the image to be displayed.
     * It should be a valid URL string pointing to the image.
     */
    img: string

    /**
     * Alternate text for the image.
     * Used for accessibility and displayed if the image fails to load.
     */
    alt: string
    /**
     * Boolean value to determine if the card is selected or not selected.
     * If is selected, an icon appear in the top left corner of the card.
     */
    isSelected: boolean
    /**
     * Function to toggle the selected state.
     *
     */
    toggleSelected: () => void
}
