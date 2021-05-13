import { memo } from 'react';
import { Layout as LayoutAntd } from 'antd';
import { Typography } from 'antd';
import css from './layout.module.css';

const { Header, Content } = LayoutAntd;
const { Title } = Typography;

export const Layout = memo(() => {
	return (
		<LayoutAntd className={css.layout}>
			<Header className={css.header}>
				<Title className={css.header_logo} level={3}>
					Fintech Courses
				</Title>
			</Header>
			<Content>Content</Content>
		</LayoutAntd>
	);
});
