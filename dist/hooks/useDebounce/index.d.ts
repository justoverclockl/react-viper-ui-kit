import { UseDebounceParams } from './types.ts';
declare const useDebounce: <T>({ value, delay }: UseDebounceParams<T>) => T;
export default useDebounce;
