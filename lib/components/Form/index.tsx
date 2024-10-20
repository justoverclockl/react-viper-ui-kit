import {
    FC,
    useState,
} from 'react';
import {
    FormProps,
    FormValues,
} from '@components/Form/types.ts';

import Button from '@components/Button';
import FormInput from '@components/Input';

const Form: FC<FormProps> = ({ schema, onSubmit }) => {
    const initialFormState: FormValues = {};

    schema.forEach((field) => {
        switch (field.type) {
            case 'text':
            case 'email':
            case 'phone':
            case 'password':
                initialFormState[field.name] = '';
        }
    });

    const [formState, setFormState] = useState<FormValues>(initialFormState);

    console.log(formState);
    const handleInputChange = (name: string, value: unknown) => {
        setFormState(prevFormState => ({
            ...prevFormState,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        alert('submitted');
        onSubmit(formState);
    };

    return (
        <form onSubmit={handleSubmit}>
            {schema.map((field, idx) => {
                return (
                    <div key={field.name}>
                        {field.type === 'text' && (
                            <FormInput
                                key={`${field.name}-${idx}`}
                                name={field.name}
                                value={formState[field.name] as string}
                                onChange={e => handleInputChange(e.target.name, e.target.value)}
                                type={field.type}
                            />
                        )}
                    </div>
                );
            })}
            <div className='rv-flex rv-justify-end rv-py-4'>
                <Button
                    className='rv-w-[150px]'
                    variant='outline'
                    size='small'
                >
                    Invia
                </Button>
            </div>
        </form>
    );
};

export default Form;
