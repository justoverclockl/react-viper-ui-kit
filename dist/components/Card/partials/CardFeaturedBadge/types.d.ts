export interface CardFeaturedBadgeProps {
    /**
     * If true a badge will be displayed in the right corner of the card.
     *
     * Accepts true or false value.
     */
    isFeatured: boolean;
    /**
     * Badge text to be displayed in the right corner of the card.
     * for example: "featured" or "in stock" or "special"
     * default is "featured"
     *
     * Accepts a valid string.
     */
    text?: string;
}
