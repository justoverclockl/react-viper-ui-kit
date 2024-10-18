import { UseFetchParams, UseFetchReturnType } from './types.ts';
declare const index: <T>({ url, config }: UseFetchParams) => UseFetchReturnType<T>;
export default index;
