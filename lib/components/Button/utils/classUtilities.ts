import { SizeType } from '../types.ts';

export const getSizeClasses = (size: SizeType): string => {
    switch (size) {
        case 'large': {
            return 'rv-w-fit rv-px-10 rv-py-4';
        }
        case 'medium': {
            return 'rv-w-fit rv-px-5 rv-py-3';
        }
        case 'small': {
            return 'rv-w-fit rv-px-5 rv-py-2';
        }
        default: {
            return 'rv-w-fit rv-px-10 rv-py-4';
        }
    }
};

export const getModeClasses = (variant: string): string => {
    switch (variant) {
        case 'primary' : {
            return 'rv-text-white rv-bg-primary hover:rv-text-white';
        }
        case 'secondary' : {
            return 'rv-px-10 rv-text-tsecondary rv-bg-secondary hover:rv-text-tprimary';
        }
        case 'outline': {
            return 'rv-px-10 rv-text-white rv-border rv-border-2 rv-bg-outline hover:rv-text-white';
        }
        case 'danger': {
            return 'rv-px-10 rv-text-white rv-bg-danger hover:rv-bg-danger/70 rv-text-white';
        }
        case 'disabled': {
            return 'rv-px-10 rv-text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.7)] rv-bg-grey-500 rv-cursor-not-allowed';
        }
        default: {
            return 'rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ';
        }
    }
};

export const getHoverClass = (variant: string): string => {
    switch (variant) {
        case 'primary' : {
            return 'rv-bg-green-500';
        }
        case 'secondary' : {
            return 'rv-bg-green-800';
        }
        case 'outline': {
            return 'rv-bg-green-200';
        }
        case 'danger': {
            return 'rv-bg-red-600';
        }
        case 'disabled': {
            return 'rv-bg-grey-400';
        }
        default: {
            return 'rv-bg-green-500';
        }
    }
};
