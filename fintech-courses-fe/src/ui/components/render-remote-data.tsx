import { memo, ReactElement } from 'react';
import { fold, RemoteData } from '@devexperts/remote-data-ts';
import { pipe } from 'fp-ts/lib/function';

interface RenderRemoteDataProps<E, A> {
	value: RemoteData<E, A>;
	success: (value: A) => ReactElement;
}

export const RenderRemoteData: <E extends Error, A>(props: RenderRemoteDataProps<E, A>) => ReactElement | null = memo(
	props => {
		const { value, success } = props;
		return pipe(
			value,
			fold(
				() => <p>Loading</p>,
				() => <p>Loading</p>,
				e => <p>{e.message}</p>,
				success,
			),
		);
	},
);
