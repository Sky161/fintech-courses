export interface HttpClient {
	GET: (url: string) => Promise<Response>;
	POST: (url: string, body?: BodyInit | null) => Promise<Response>;
}

export const httpClient: HttpClient = {
	GET: (url: string) => fetch(url, { method: 'GET' }),
	POST: (url: string, body?: BodyInit | null) => fetch(url, { method: 'POST', body }),
};
