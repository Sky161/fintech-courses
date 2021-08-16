import React, { memo, useContext } from 'react';
import { DetailCoursePage } from './detail.page';
import { CourseContext } from '../../contexts/course.context';
import { useRequest } from '../../../hooks/use-request.hook';
import { useParams } from 'react-router-dom';

interface Params {
	id: string;
}

export const DetailPageContainer = memo(() => {
	const ctx = useContext(CourseContext);
	const { id } = useParams<Params>();

	const courseDetail = useRequest(() => ctx.courseViewModel.getCourse(id), [id]);
	return React.createElement(DetailCoursePage, { courseDetail });
});
