import { failure, pending, RemoteData } from '@devexperts/remote-data-ts';
import { useCallback, useEffect, useState } from 'react';

type Req<E, A> = Promise<RemoteData<E, A>>;
type ReqCallback<E, A> = () => Req<E, A>;

export const useRequest = <E, A>(req: ReqCallback<E, A>): RemoteData<E, A> => {
	const [state, setState] = useState<RemoteData<E, A>>(pending);
	const reqCallback = useCallback(() => req(), []);

	useEffect(() => {
		reqCallback()
			.then(data => setState(data))
			.catch(e => setState(failure(e)));
	}, []);

	return state;
};
