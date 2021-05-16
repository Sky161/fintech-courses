import { memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const Routes = memo(() => (
	<BrowserRouter>
		<Switch>
			<Route path="/courses/:id">Detail Course Page</Route>
			<Route path="/">Main Page</Route>
		</Switch>
	</BrowserRouter>
));
