import { memo, ReactNode } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { Typography } from 'antd';
import css from './layout.module.css';

const { Header, Content } = LayoutAntd;
const { Title } = Typography;

interface LayoutProps {
	children: ReactNode;
}

export const Layout = memo((props: LayoutProps) => {
	const { children } = props;
	return (
		<LayoutAntd className={css.layout}>
			<Header className={css.header}>
				<Title className={css.header_logo} level={3}>
					Fintech Courses
				</Title>
			</Header>
			<Content>{children}</Content>
		</LayoutAntd>
	);
});
