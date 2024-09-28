import {
    FC,
    useMemo,
} from 'react';
import { ButtonProps } from './types.ts';
import { BASE_BUTTON_CLASSES } from './constants.ts';
import {
    getHoverClass,
    getModeClasses,
    getSizeClasses,
} from './utils/classUtilities.ts';
import LoadingIcon from './icons/LoadingIcon.tsx';

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    size = 'large',
    isLoading = false,
    href = null,
    children,
    className,
    ...props
}) => {
    const computedClassName = useMemo(() => {
        const modeClass = getModeClasses(variant);
        const sizeClass = getSizeClasses(size);

        return [modeClass, sizeClass, className].join(' ');
    }, [variant, size, className]);

    const computedHoverClass = useMemo(() => {
        const baseClass = 'rv-absolute rv-w-0 rv-h-0 rv-transition-all rv-duration-500 rv-ease-out rv-bg-green-500 rv-rounded-full group-hover:rv-w-56 group-hover:rv-h-56';
        const hoverClass = getHoverClass(variant);

        return [baseClass, hoverClass].join(' ');
    }, [variant]);

    return (
        <a
            role='button'
            {...(href && { href: href })}
            className={`${BASE_BUTTON_CLASSES} ${computedClassName}`}
            {...props}
        >
            <span className={`${computedHoverClass}`}></span>
            <span className='rv-absolute rv-inset-0 rv-w-full rv-h-full -rv-mt-1 rv-rounded-lg rv-opacity-30 rv-bg-gradient-to-b rv-from-transparent rv-via-transparent rv-to-gray-700'></span>
            {isLoading && (
                <span className='rv-me-2 rv-relative rv-z-10'>
                    <LoadingIcon />
                </span>
            )}
            <span className='rv-relative'>
                {children}
            </span>
        </a>
    );
};

export default Button;
