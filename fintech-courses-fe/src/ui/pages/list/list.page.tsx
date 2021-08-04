import { List, Card } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { fold, RemoteData } from '@devexperts/remote-data-ts';
import { ZodError } from 'zod';
import { pipe } from 'fp-ts/lib/function';

interface ListItemCourse {
	id: string;
	title: string;
	description?: string;
}

interface ListCoursesProps {
	data: RemoteData<ZodError | Error, Array<ListItemCourse>>;
}

export const ListCourses = memo((props: ListCoursesProps) => {
	const { data } = props;
	return pipe(
		data,
		fold(
			() => <p>Loading</p>,
			() => <p>Loading</p>,
			() => <p>Loading</p>,
			data => (
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
			),
		),
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
