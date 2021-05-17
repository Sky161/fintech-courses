import { memo, ReactNode } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { Typography } from 'antd';
import css from './layout.module.css';
import { Link } from 'react-router-dom';

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
				<Link to="/">
					<Title className={css.header_logo} level={3}>
						Fintech Courses
					</Title>
				</Link>
			</Header>
			<Content className={css.content}>{children}</Content>
		</LayoutAntd>
	);
});
