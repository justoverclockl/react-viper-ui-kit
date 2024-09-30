import {
    renderHook,
    act,
} from '@testing-library/react';
import useWindowSize from './index.ts';

describe('Test React Viper UseWindowSize', () => {
    it('should change value based on innerwidth', () => {
        const { result } = renderHook(() => useWindowSize());

        act(() => {
            Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.width)
            .toBe(500);

        act(() => {
            Object.defineProperty(window, 'innerWidth', { value: 1200 });
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.width)
            .toBe(1200);
    });

    it('should change value based on innerHeight', () => {
        const { result } = renderHook(() => useWindowSize());

        act(() => {
            Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: 500 });
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.height)
            .toBe(500);

        act(() => {
            Object.defineProperty(window, 'innerHeight', { value: 1200 });
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.height)
            .toBe(1200);
    });
});
