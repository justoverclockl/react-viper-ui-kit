import { AnchorHTMLAttributes } from 'react';

export type SizeType = 'small' | 'medium' | 'large';
export type VariantType = 'primary' | 'secondary' | 'outline' | 'danger' | 'disabled';

export type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     *  Specify the button variant
     *  variant can be 'primary' | 'secondary' | 'outline' | 'disabled'
     */
    variant: VariantType
    /**
     *  Allowed sizes for the Button component
     *
     * - small
     * - medium
     * - large
     */
    size?: SizeType
    /**
     *  If true will render a loading spinner icon
     *
     */
    isLoading?: boolean
    /**
     *  If passed will add the href attribute to the button
     *
     */
    href?: string
};
