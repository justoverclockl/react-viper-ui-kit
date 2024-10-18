import { FC } from 'react';
import { CardContentProps } from './types.ts';

const CardContent: FC<CardContentProps> = ({ children }) => {
    return (
        <div className='rv-relative rv-px-4 rv--mt-16'>
            <div className='rv-p-6 rv-bg-white rv-rounded rv-shadow-xl'>
                {children}
            </div>
        </div>
    );
};

export default CardContent;
