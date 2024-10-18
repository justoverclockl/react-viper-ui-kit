import { FC } from 'react';
import { CardContentWrapperProps } from './types.ts';

const CardContentWrapper: FC<CardContentWrapperProps> = ({ children }) => {
    return (
        <div className='rv-relative'>
            {children}
        </div>
    );
};

export default CardContentWrapper;
