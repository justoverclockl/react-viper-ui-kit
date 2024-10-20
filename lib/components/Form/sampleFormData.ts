import { FormSchema } from '@components/Form/types.ts';

export const formSchema: FormSchema = [
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
        label: 'Età',
        name: 'age',
        type: 'number',
        placeholder: 'Inserisci la tua età',
        validation: (value: unknown) =>
            value && Number(value) >= 18
                ? null
                : 'Devi avere almeno 18 anni',
    },
    {
        label: 'Email',
        name: 'email',
        type: 'email',
        placeholder: 'Inserisci la tua email',
        validation: (value: unknown) =>
            value && (value as string).includes('@')
                ? null
                : "Inserisci un'email valida",
    },
    {
        label: 'Accetto i termini e le condizioni',
        name: 'acceptTerms',
        type: 'checkbox',
        validation: (value: unknown) =>
            value
                ? null
                : 'Devi accettare i termini e le condizioni',
    },
    {
        label: 'Paese',
        name: 'country',
        type: 'select',
        options: [
            { value: '', label: 'Seleziona un paese' },
            { value: 'IT', label: 'Italia' },
            { value: 'US', label: 'Stati Uniti' },
        ],
        validation: (value: unknown) => (value
            ? null
            : 'Seleziona un paese'),
    },
];
