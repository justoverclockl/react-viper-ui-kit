/**
 * Parameters for the `useDebounce` hook.
 *
 * @template T - The type of the value that needs to be debounced.
 */
export type UseDebounceParams<T> = {
    /**
     * The value to be debounced. This value can be of any type and will be returned
     * only after the specified delay has passed since the last change.
     */
    value: T

    /**
     * The delay time in milliseconds to wait before updating the debounced value.
     * The hook will only update the debounced value after the delay has passed since
     * the last change of the input value.
     */
    delay: number
};
