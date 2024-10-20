import {
    ChangeEvent,
    FC,
} from 'react';
import { FormInputProps } from '@components/Input/types.ts';

const FormInput: FC<FormInputProps> = ({
    type,
    onChange,
    onBlur,
    error,
    ...props
}) => {
    const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <>
            {type === 'text' && (
                <>
                    <input
                        onChange={handleInputOnChange}
                        className='rv-w-full rv-text-gray-700 rv-p-2 rv-border-2 rb-border-bg-secondary rv-outline-none focus:rv-bg-slate-100 rv-rounded'
                        type={type}
                        onBlur={onBlur}
                        {...props}
                    />
                    {error && (
                        <div className='rv-text-white'>{error}</div>
                    )}
                </>
            )}
        </>
    );
};

export default FormInput;
