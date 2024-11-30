import './index.css';
import { Form } from '../lib';
import { FormValues } from '@components/Form/types.ts';

const App = () => {
    const handleSubmit = (values: FormValues) => {
        console.log('Valori del form:', values);
    };

    return (
        <div id='app' className='rv-p-4'>
            <Form
                schema={[
                    {
                        label: 'Username',
                        name: 'username',
                        type: 'text',
                        placeholder: 'Inserisci il tuo username',
                        validation: (value: unknown) => (value
                            ? null
                            : 'Campo obbligatorio'),
                    },
                    {
                        label: 'Email',
                        name: 'email',
                        type: 'email',
                        placeholder: 'Inserisci la tua email',
                        validation: (value: unknown) => {
                            const pattern: RegExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                            const isEmailValid: boolean = pattern.test(value as string);

                            return isEmailValid
                                ? null
                                : 'La mail inserita non è valida';
                        },
                    },
                    {
                        label: 'Select',
                        name: 'values',
                        type: 'select',
                        placeholder: 'Scegli valore',
                        options: [
                            { value: 1, label: 'one' },
                            { value: 2, label: 'two' },
                        ],
                        validation: (value: unknown) => (value
                            ? null
                            : 'Campo obbligatorio'),
                    },
                ]}
                onSubmit={values => handleSubmit(values)}
            />
        </div>
    );
};

export default App;
