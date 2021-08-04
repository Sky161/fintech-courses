import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { DetailCourse } from '../pages/detail/detail.page';
import { ListCoursesContainer } from '../pages/list/list.container';

export const Routes = memo(() => (
	<Switch>
		<Route path="/courses/:id">
			<DetailCourse />
		</Route>
		<Route path="/">
			<ListCoursesContainer />
		</Route>
	</Switch>
));
