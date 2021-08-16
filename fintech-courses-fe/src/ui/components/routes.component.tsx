import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ListCoursesContainer } from '../pages/list/list.container';
import { DetailPageContainer } from '../pages/detail/detail.container';

export const Routes = memo(() => (
	<Switch>
		<Route path="/courses/:id">
			<DetailPageContainer />
		</Route>
		<Route path="/">
			<ListCoursesContainer />
		</Route>
	</Switch>
));
