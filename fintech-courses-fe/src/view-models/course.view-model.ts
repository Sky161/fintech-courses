import { CourseService } from '../services/course.service';
import { remoteData } from '@devexperts/remote-data-ts';
import { pipe } from 'fp-ts/lib/function';
import { array } from 'fp-ts';
import { ResponseData } from '../clients/http.client';

interface CourseViewModelContext {
	courseService: CourseService;
}

export interface Course {
	id: string;
	title: string;
	description?: string;
}

export interface CourseViewModel {
	getList: () => ResponseData<Course[]>;
}

export const createCourseViewModel = (ctx: CourseViewModelContext): CourseViewModel => {
	const getList = async () => {
		const data = await ctx.courseService.getListCourses();
		return remoteData.map(data, data =>
			pipe(
				data,
				array.map(course => ({ id: course.id, title: course.title, description: course.description })),
			),
		);
	};

	return { getList };
};
