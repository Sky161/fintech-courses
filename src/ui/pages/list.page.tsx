import { List, Card } from 'antd';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface ListItemCourse {
	id: number;
	title: string;
	description: string;
}

interface ListCoursesProps {
	data: Array<ListItemCourse>;
}

export const ListCourses = memo((props: ListCoursesProps) => {
	const { data } = props;
	return (
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
