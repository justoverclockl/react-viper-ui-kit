import {
    useEffect,
    useState,
} from 'react';
import {
    UseFetchParams,
    UseFetchReturnType,
} from './types.ts';

const index = <T>({ url, config }: UseFetchParams): UseFetchReturnType<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<T | undefined>(undefined);

    const handleGetData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    ...config?.headers,
                }),
                ...config,
            });

            if (!response.ok) {
                setError('Error during data fetching');
            }

            const result: T = await response.json();

            setData(result);
        } catch (e) {
            setError((e as Error).message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        handleGetData();
    }, [url]);

    return { isLoading, error, data };
};

export default index;
