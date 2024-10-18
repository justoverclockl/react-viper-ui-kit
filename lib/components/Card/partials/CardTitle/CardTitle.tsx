import { FC } from 'react';
import { CardTitleProps } from './types.ts';

const CardTitle: FC<CardTitleProps> = ({ title }) => {
    return (
        <h4 className='rv-mt-1 rv-font-semibold rv-text-lg rv-leading-tight rv-truncate rv-text-tprimary'>
            {title}
        </h4>
    );
};

export default CardTitle;
