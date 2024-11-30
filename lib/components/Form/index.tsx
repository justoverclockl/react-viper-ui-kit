import {
    FC,
    FormEvent,
    Fragment,
    useState,
} from 'react';
import {
    FieldConfig,
    FormErrorState,
    FormProps,
    FormValues,
} from '@components/Form/types.ts';

import Button from '@components/Button';
import FormInput from '@components/Input';

const Form: FC<FormProps> = ({ schema, onSubmit }) => {
    const initialFormState: FormValues = {};
    const [errors, setErrors] = useState<FormErrorState>({});

    schema.forEach((field: FieldConfig): void => {
        switch (field.type) {
            case 'text':
            case 'email':
            case 'phone':
            case 'password':
            case 'select':
                initialFormState[field.name] = '';
        }
    });

    const [formState, setFormState] = useState<FormValues>(initialFormState);

    console.log(formState, errors);
    const handleInputChange = (name: string, value: unknown) => {
        setFormState(prevFormState => ({
            ...prevFormState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log('Submitting form with values:', formState);
        onSubmit(formState);
    };

    return (
        <form
            className='rv-flex rv-flex-col rv-gap-3'
            onSubmit={handleSubmit}
        >
            {schema.map((field, idx) => {
                return (
                    <Fragment key={field.name}>
                        {field.type === 'select'
                            ? (
                                <p>no component</p>
                            )
                            : (
                                <FormInput
                                    key={`${field.name}-${idx}`}
                                    name={field.name}
                                    value={formState[field.name] as string}
                                    placeholder={field.placeholder || undefined}
                                    onChange={e => handleInputChange(e.target.name, e.target.value)}
                                    type={field.type}
                                />
                            )}
                    </Fragment>
                );
            })}
            <div className='rv-flex rv-justify-end rv-py-4'>
                <button
                    type='submit'
                    className='rv-max-w-fit rv-px-10 rv-text-white [text-shadow:_0_1px_1px_rgb(0_0_0_/_0.7)] rv-border-2 rv-bg-outline hover:rv-text-white rv-rounded  rv-px-5 rv-py-2'
                >
                    Invia
                </button>
            </div>
        </form>
    );
};

export default Form;
