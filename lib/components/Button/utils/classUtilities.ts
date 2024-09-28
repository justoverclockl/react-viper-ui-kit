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
        case 'full': {
            return 'rv-w-full rv-px-5 rv-py-2';
        }
        default: {
            return 'rv-w-fit rv-px-10 rv-py-4';
        }
    }
};

export const getModeClasses = (variant: string): string => {
    switch (variant) {
        case 'primary' : {
            return 'rv-text-tprimary rv-bg-primary hover:rv-text-tsecondary';
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
        default: {
            return 'rv-text-tprimary rv-bg-primary hover:rv-bg-primary/70 ';
        }
    }
};

export const getHoverClass = (variant: string) => {
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
        default: {
            return 'rv-bg-green-500';
        }
    }
};
