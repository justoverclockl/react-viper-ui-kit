import {
    renderHook,
    waitFor,
} from '@testing-library/react';
import useFetch from './useFetch.ts';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe('Test React Viper UseFetchHook', () => {
    it('should fetch correctly the data', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ id: 1, title: 'Test Title', body: 'body' }));
        const { result } = renderHook(() => useFetch({ url: 'https://jsonplaceholder.typicode.com/posts' }));

        expect(result.current.isLoading)
            .toBe(true);
        expect(result.current.data)
            .toBeUndefined();
        expect(result.current.error)
            .toBe('');

        await waitFor(() => {
            expect(result.current.isLoading)
                .toBe(false);
        });

        expect(result.current.data)
            .toEqual({ id: 1, title: 'Test Title', body: 'body' });
        expect(result.current.error)
            .toBe('');
    });
});
