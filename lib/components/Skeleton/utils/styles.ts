export const getSkeletonLineSize = (size: string) => {
    switch (size) {
        case 'small': {
            return '33%';
        }
        case 'medium': {
            return '50%';
        }
        case 'full': {
            return '100%';
        }
        default: {
            return '100%';
        }
    }
};
