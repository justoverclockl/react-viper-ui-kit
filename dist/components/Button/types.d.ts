import { ButtonHTMLAttributes } from 'react';
export type SizeType = 'small' | 'medium' | 'large' | 'full';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
     *  Specify if button is of type primary
     *  normally used for principal actions
     */
    primary?: boolean;
    /**
     *  Allowed sizes for the Button component
     *
     * - small
     * - medium
     * - large
     * - full
     */
    size?: SizeType;
};
