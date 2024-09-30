import { UseFetchParams, UseFetchReturnType } from './types.ts';
declare const useFetch: <T>({ url, config }: UseFetchParams) => UseFetchReturnType<T>;
export default useFetch;
