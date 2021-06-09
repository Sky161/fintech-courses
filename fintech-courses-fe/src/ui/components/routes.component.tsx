import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListCourses } from '../pages/list.page';
import { LIST_COURSES_MOCK } from '../../mocks/list-courses.mock';
import { DetailCourse } from '../pages/detail/detail.page';

export const Routes = memo(() => (
	<Switch>
		<Route path="/courses/:id">
			<DetailCourse />
		</Route>
		<Route path="/">
			<ListCourses data={LIST_COURSES_MOCK} />
		</Route>
	</Switch>
));
