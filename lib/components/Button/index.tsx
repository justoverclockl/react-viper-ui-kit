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

const getModeClasses = (variant: string): string => {
    switch (variant) {
        case 'primary' : {
            return 'rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ';
        }
        case 'secondary' : {
            return 'rv-text-tsecondary rv-bg-secondary hover:rv-bg-secondary/70 ';
        }
        case 'outline': {
            return 'rv-text-tlight rv-bg-outline rv-border-solid rv-border-light rv-border-2 hover:rv-bg-outline/70 rv-border-light rv-border-2 ';
        }
        case 'danger': {
            return 'rv-text-white rv-bg-danger rv-border-solid hover:rv-bg-danger/70';
        }
        default: {
            return 'rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ';
        }
    }
};

const Button: FC<ButtonProps> = ({
    variant = 'primary',
    size = 'large',
    isLoading = false,
    children,
    className,
    ...props
}) => {
    const computedClassName = useMemo(() => {
        const modeClass = getModeClasses(variant);
        const sizeClass = getSizeClasses(size);

        return [modeClass, sizeClass, className].join(' ');
    }, [variant, size, className]);

    return (
        <button
            className={`${BASE_BUTTON_CLASSES} ${computedClassName}`}
            role='button'
            aria-label={`${variant} button`}
            type='button'
            {...props}
        >
            <div className='rv-flex rv-gap-3 rv-items-center'>
                {isLoading && (
                    <span>
                        <svg xmlns='http://www.w3.org/2000/svg' width='1.3em' height='1.3em' viewBox='0 0 24 24'>
                            <g stroke='currentColor'>
                                <circle cx={12} cy={12} r={9.5} fill='none' strokeLinecap='round' strokeWidth={3}>
                                    <animate
                                        attributeName='stroke-dasharray'
                                        calcMode='spline'
                                        dur='1.5s'
                                        keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
                                        keyTimes='0;0.475;0.95;1'
                                        repeatCount='indefinite'
                                        values='0 150;42 150;42 150;42 150'
                                    >
                                    </animate>
                                    <animate
                                        attributeName='stroke-dashoffset'
                                        calcMode='spline'
                                        dur='1.5s'
                                        keySplines='0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1'
                                        keyTimes='0;0.475;0.95;1'
                                        repeatCount='indefinite'
                                        values='0;-16;-59;-59'
                                    >
                                    </animate>
                                </circle>
                                <animateTransform attributeName='transform' dur='2s' repeatCount='indefinite' type='rotate' values='0 12 12;360 12 12'></animateTransform>
                            </g>
                        </svg>
                    </span>
                )}
                <span>{children}</span>
            </div>
        </button>
    );
};

export default Button;
