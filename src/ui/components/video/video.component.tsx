import { ForwardedRef, forwardRef, memo, PropsWithChildren } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
import css from './video.module.css';

interface VideoProps extends ReactPlayerProps {}

export const Video = memo((props: VideoProps) => {
	return <ReactPlayer {...props} wrapper={Wrapper} />;
});

const Wrapper = forwardRef((props: PropsWithChildren<{}>, ref: ForwardedRef<HTMLDivElement>) => {
	return (
		<div ref={ref} className={css.wrapper}>
			{props.children}
		</div>
	);
});
