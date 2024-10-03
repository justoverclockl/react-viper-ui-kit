/**
 * Props for the Card component.
 */
export interface CardProps {
    /**
     * Determines if the card is currently selected.
     * @default false
     */
    isSelected?: boolean

    /**
     * Indicates if the card is marked as featured.
     * @default false
     */
    isFeatured?: boolean

    /**
     * Label text for the card's tag (if any).
     * This can be used to display a category or status on the card.
     */
    tagLabel?: string

    /**
     * Description text for the card's tag (if any).
     * Typically provides additional information or context for the tag label.
     */
    tagDescription?: string

    /**
     * The image URL for the card's main display picture.
     * This field is required.
     */
    img?: string

    /**
     * Title text displayed on the card.
     * This field is required and should provide a brief summary or headline.
     */
    title: string

    /**
     * Main description content for the card.
     * Provides detailed information or context about the card.
     */
    description: string

    /**
     * Callback function that triggers when the card is selected or deselected.
     * Can be used to handle custom behavior when the user clicks the card.
     *
     */
    onCardSelect?: () => void
    /**
     * Callback function that triggers when the card is clicked.
     * Can be used to handle custom behavior when the user clicks the card.
     *
     */
    onCardClick?: () => void
}
