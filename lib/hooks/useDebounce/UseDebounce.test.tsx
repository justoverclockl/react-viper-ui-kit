import {
    renderHook,
    act,
} from '@testing-library/react';
import useDebounce from './index.ts';

describe('Test React Viper useDebounce hook', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.runOnlyPendingTimers();
        jest.useRealTimers();
    });

    it('should return the initial value immediately', () => {
        const { result } = renderHook(() =>
            useDebounce({ value: 'initial', delay: 500 }),
        );

        expect(result.current)
            .toBe('initial');
    });

    it('should update the debounced value after the specified delay', () => {
        const { result, rerender } = renderHook(
            ({ value, delay }) => useDebounce({ value, delay }),
            { initialProps: { value: 'initial', delay: 500 } },
        );

        rerender({ value: 'updated', delay: 500 });

        // Before timeout, the value should not have updated
        expect(result.current)
            .toBe('initial');

        // Fast-forward time by 500ms
        act(() => {
            jest.advanceTimersByTime(500);
        });

        // value should have updated
        expect(result.current)
            .toBe('updated');
    });
});
