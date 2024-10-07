export type UseFetchParams = {
    /**
     * The URL to make the HTTP request to.
     *
     * @example const response = await fetch('https://example.com/');
     */
    url: string
    /**
     * Optional configuration for the fetch request, such as headers, method, body, etc.
     * Uses the `RequestInit` type provided by the Fetch API.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/RequestInit
     */
    config?: RequestInit
};

/**
 * The return type of the `useFetch` hook.
 *
 * @template T - The type of the data expected from the fetch request.
 */
export type UseFetchReturnType<T> = {
    /**
     * Indicates whether the fetch request is currently in progress.
     */
    isLoading: boolean
    /**
     * Error message in case the fetch request fails. Empty string if no error occurred.
     */
    error: string
    /**
     * The data returned from the fetch request, or `undefined` if not yet fetched.
     * Type `T` is used to ensure type safety.
     */
    data: T | undefined
};
