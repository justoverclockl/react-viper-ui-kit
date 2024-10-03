import './index.css';
import Card from '../lib/components/Card';

const App = () => {
    return (
        <div id='app'>
            <Card
                img='https://sm.ign.com/t/ign_it/screenshot/default/asgsga-r2m2_kgq3.1280.jpg'
                title='Ps5 PRO: svelate le sue forme'
                description='Ci siamo: fonti certe svelano design della nuova console e data di presentazione al pubblico'
                tagLabel='console'
                tagDescription='ps5 pro debutta?'
            />
        </div>
    );
};

export default App;
