import { failure, pending, RemoteData } from '@devexperts/remote-data-ts';
import { useEffect, useState } from 'react';

export const useRequest = <E, A>(req: Promise<RemoteData<E, A>>): RemoteData<E, A> => {
	const [state, setState] = useState<RemoteData<E, A>>(pending);
	useEffect(() => {
		req.then(data => setState(data)).catch(e => setState(failure(e)));
	}, [req]);
	return state;
};
