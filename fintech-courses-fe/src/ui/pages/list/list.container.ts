import React, { memo, useContext } from 'react';
import { CourseContext } from '../../contexts/courseContextType';
import { useRequest } from '../../../hooks/use-request.hook';
import { ListCourses } from './list.page';

export const ListCoursesContainer = memo(() => {
	const courseContext = useContext(CourseContext);
	const data = useRequest(courseContext.courseViewModel.getList);

	return React.createElement(ListCourses, { data });
});
