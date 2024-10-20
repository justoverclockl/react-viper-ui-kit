import './index.css';
import { Form } from '../lib';

const App = () => {
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
                ]}
                onSubmit={() => console.log('submitted')}
            />
        </div>
    );
};

export default App;
