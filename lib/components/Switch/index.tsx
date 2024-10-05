import { FC } from 'react';
import { SwitchProps } from './types.ts';

const Switch: FC<SwitchProps> = ({
    checked,
    onChange,
    label,
    disabled = false,
    ...props
}) => {
    return (
        <label
            className='rv-group rv-relative rv-flex rv-items-center rv-p-2 rv-text-base'
        >
            <input
                checked={checked}
                type='checkbox'
                className='rv-peer rv-absolute rv-left-1/2 rv-h-full rv-w-full -rv-translate-x-1/2 rv-appearance-none rv-rounded-md rv-cursor-pointer disabled:rv-opacity-50'
                disabled={disabled}
                role='switch'
                aria-checked={checked}
                onChange={disabled
                    ? undefined
                    : onChange}
                {...props}
            />
            <span
                className='rv-relative rv-cursor-pointer rv-ml-2 rv-flex rv-h-6 rv-w-12 rv-flex-shrink-0 rv-items-center rv-rounded-full rv-bg-gray-300 rv-p-1 rv-duration-300 rv-ease-in-out after:rv-h-4 after:rv-w-4 after:rv-rounded-full after:rv-bg-white after:rv-shadow-md after:rv-duration-300 group-hover:rv-after:translate-x-1 peer-checked:rv-bg-gradient-to-r rv-from-emerald-500 rv-to-emerald-900 peer-checked:after:rv-translate-x-6 peer-disabled:rv-cursor-not-allowed'
            >
            </span>
            {label && (
                <span className='rv-ml-2 rv-text-white'>
                    {label}
                </span>
            )}
        </label>
    );
};

export default Switch;
