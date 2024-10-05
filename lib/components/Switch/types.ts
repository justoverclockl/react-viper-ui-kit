import {
    ChangeEvent,
    HTMLAttributes,
} from 'react';

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    checked?: boolean
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    label?: string
    disabled?: boolean
}
