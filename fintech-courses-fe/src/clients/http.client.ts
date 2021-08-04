import { RemoteData } from '@devexperts/remote-data-ts';
import { ZodError } from 'zod';

export interface HttpClient {
	GET: (url: string) => Promise<Response>;
	POST: (url: string, body?: BodyInit | null) => Promise<Response>;
}

export type ResponseData<V> = Promise<RemoteData<ZodError | Error, V>>;

export const httpClient: HttpClient = {
	GET: (url: string) => fetch(url, { method: 'GET' }),
	POST: (url: string, body?: BodyInit | null) => fetch(url, { method: 'POST', body }),
};
