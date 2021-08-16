import { CourseService } from '../services/course.service';
import { remoteData } from '@devexperts/remote-data-ts';
import { pipe } from 'fp-ts/lib/function';
import { array } from 'fp-ts';
import { ResponseData } from '../clients/http.client';
import { CourseBody } from '../services/dto/course.dto';

interface CourseViewModelContext {
	courseService: CourseService;
}

export interface CourseItem {
	id: string;
	title: string;
	description?: string;
}

export interface Course {
	title: string;
	body?: CourseBody[];
}

export interface CourseViewModel {
	getList: () => ResponseData<CourseItem[]>;
	getCourse: (id: string) => ResponseData<Course>;
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

	const getCourse = async (id: string) => {
		const data = await ctx.courseService.getCourse(id);
		return remoteData.map(data, data => ({ title: data.title, body: data.body }));
	};

	return { getList, getCourse };
};
