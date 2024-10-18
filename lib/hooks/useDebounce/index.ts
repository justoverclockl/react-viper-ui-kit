import {
    useState,
    useEffect,
} from 'react';
import { UseDebounceParams } from './types.ts';

const useDebounce = <T>({ value, delay }: UseDebounceParams<T>): T => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default useDebounce;
