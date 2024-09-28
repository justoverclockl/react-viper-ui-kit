import {
    FC,
    useMemo,
} from 'react';
import {
    ButtonProps,
    SizeType,
} from './types.ts';
import { BASE_BUTTON_CLASSES } from './constants.ts';

const getSizeClasses = (size: SizeType): string => {
    switch (size) {
        case 'small': {
            return 'rv-w-fit rv-px-5 rv-py-2';
        }
        case 'medium': {
            return 'rv-w-fit rv-px-6 rv-py-3';
        }
        case 'large': {
            return 'rv-w-fit rv-px-10 rv-py-4';
        }
        case 'full': {
            return 'rv-w-full rv-px-10 rv-py-4';
        }
        default: {
            return 'rv-w-full rv-px-5 rv-py-2';
        }
    }
};

const getModeClasses = (isPrimary: boolean): string =>
    isPrimary
        ? 'rv-text-white rv-bg-primary hover:rv-bg-primary/70'
        : 'rv-text-white rv-bg-secondary hover:rv-bg-secondary/70';

const Button: FC<ButtonProps> = ({
    primary = false,
    size = 'large',
    children,
    className,
    ...props
}) => {
    const computedClassName = useMemo(() => {
        const modeClass = getModeClasses(primary);
        const sizeClass = getSizeClasses(size);

        return [modeClass, sizeClass, className].join(' ');
    }, [primary, size, className]);

    return (
        <button
            className={`${BASE_BUTTON_CLASSES} ${computedClassName}`}
            type='button'
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
