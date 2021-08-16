import { List, Card } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { RemoteData } from '@devexperts/remote-data-ts';
import { ZodError } from 'zod';
import { RenderRemoteData } from '../../components/render-remote-data';

interface ListItemCourse {
	id: string;
	title: string;
	description?: string;
}

interface ListCoursesProps {
	data: RemoteData<ZodError | Error, Array<ListItemCourse>>;
}

export const ListCoursesPage = memo((props: ListCoursesProps) => {
	const { data } = props;
	return (
		<RenderRemoteData
			value={data}
			success={data => (
				<List
					grid={configGrid}
					dataSource={data}
					renderItem={(item: ListItemCourse) => (
						<List.Item>
							<Link to={`/courses/${item.id}`}>
								<Card title={item.title}>{item.description}</Card>
							</Link>
						</List.Item>
					)}
				/>
			)}
		/>
	);
});

const configGrid = {
	gutter: 16,
	xs: 1,
	sm: 2,
	md: 4,
	lg: 4,
	xl: 6,
	xxl: 3,
};
