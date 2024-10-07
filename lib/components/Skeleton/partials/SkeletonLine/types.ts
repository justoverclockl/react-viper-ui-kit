export type SkeletonSizeType = 'small' | 'medium' | 'full';

export interface SkeletonLineProps {
    /**
     * The width of the placeholder line.
     * Can be small | medium | full
     */
    size?: SkeletonSizeType
    /**
     * A schema defining the structure of the skeleton lines.
     * This allows for customizing the number of lines, their width, and spacing.
     *
     *
     * **Usage Example:**
     * ```tsx
     * const customLineSchema: SkeletonLineSchema = [
     *     "full",
     *     "full",
     *     "medium",
     *   ];
     *
     * <Skeleton lineSchema={customLineSchema} />
     * ```
     */
    schema?: SkeletonLineSchema
}

export type SkeletonLineSchema = Array<SkeletonSizeType>;
