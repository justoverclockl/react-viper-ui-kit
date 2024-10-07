import {
    ChangeEvent,
    HTMLAttributes,
} from 'react';

export interface SwitchProps extends HTMLAttributes<HTMLInputElement> {
    /**
     * Determines if the switch is currently checked.
     *
     * @default false
     */
    checked?: boolean

    /**
     * Callback function triggered when the switch state changes.
     * Receives the change event as an argument.
     */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void

    /**
     * Optional label text displayed next to the switch.
     */
    label?: string

    /**
     * Disables the switch, making it non-interactive.
     *
     * @default false
     */
    disabled?: boolean
}
