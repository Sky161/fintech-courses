import { failure, pending, RemoteData } from '@devexperts/remote-data-ts';
import { useEffect, useState } from 'react';

type Req<E, A> = Promise<RemoteData<E, A>>;

export const useRequest = <E, A>(req: () => Req<E, A>, deps: unknown[]): RemoteData<E, A> => {
	const [state, setState] = useState<RemoteData<E, A>>(pending);
	useEffect(() => {
		req()
			.then(data => setState(data))
			.catch(e => setState(failure(e)));
	}, deps);

	return state;
};
