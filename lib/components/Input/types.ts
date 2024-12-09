import { FieldType } from '@components/Form/types.ts';
import { InputHTMLAttributes } from 'react';

export interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: FieldType
    validate?: (value: unknown) => void
    error?: string | null
}
