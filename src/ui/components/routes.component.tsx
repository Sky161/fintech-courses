import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListCourses } from '../pages/list.page';
import { LIST_COURSES_MOCK } from '../../mocks/list-courses.mock';

export const Routes = memo(() => (
	<Switch>
		<Route path="/courses/:id">Detail Course Page</Route>
		<Route path="/">
			<ListCourses data={LIST_COURSES_MOCK} />
		</Route>
	</Switch>
));
