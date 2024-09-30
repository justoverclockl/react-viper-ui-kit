import {
    useEffect,
    useState,
} from 'react';
import { UseWindowSizeStateType } from './types';

const useWindowSize = (): UseWindowSizeStateType => {
    const [size, setSize] = useState<UseWindowSizeStateType>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const handleSizeChange = (): void => {
        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleSizeChange);

        handleSizeChange();

        return () => {
            window.removeEventListener('resize', handleSizeChange);
        };
    }, []);

    return size;
};

export default useWindowSize;
