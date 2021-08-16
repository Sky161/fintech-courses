import React, { memo, useContext } from 'react';
import { CourseContext } from '../../contexts/course.context';
import { ListCoursesPage } from './list.page';
import { useRequest } from '../../../hooks/use-request.hook';

export const ListCoursesContainer = memo(() => {
	const courseContext = useContext(CourseContext);
	const data = useRequest(() => courseContext.courseViewModel.getList(), []);

	return React.createElement(ListCoursesPage, { data });
});
