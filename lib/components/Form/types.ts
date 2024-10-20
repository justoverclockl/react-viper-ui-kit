export type FieldType =
  | 'text'
  | 'number'
  | 'email'
  | 'password'
  | 'phone'
  | 'checkbox'
  | 'select'
  | 'radio';

export type SelectOption = {
    value: string
    label: string
};

export interface FieldConfigBase {
    label: string
    name: string
    type: FieldType
    placeholder?: string
}

export interface SelectFieldConfig extends FieldConfigBase {
    type: 'select'
    options: Array<SelectOption>
}

export type FieldConfig = FieldConfigBase | SelectFieldConfig;
export type FormSchema = Array<FieldConfig>;
export type FormValues = {
    [key: string]: unknown
};

export interface FormProps {
    schema: FormSchema
    onSubmit: (values: FormValues) => void
}
