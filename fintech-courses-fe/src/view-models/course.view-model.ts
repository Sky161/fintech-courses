import { CourseService } from '../services/course.service';
import { RemoteData, remoteData } from '@devexperts/remote-data-ts';
import { pipe } from 'fp-ts/lib/function';
import { array } from 'fp-ts';
import { ZodError } from 'zod';

interface CourseViewModelContext {
	courseService: CourseService;
}

export interface Course {
	id: string;
	title: string;
	description?: string;
}

export interface CourseViewModel {
	list: Promise<RemoteData<ZodError | Error, Course[]>>;
}

export const createCourseViewModel = (ctx: CourseViewModelContext): CourseViewModel => {
	const list = ctx.courseService.list.then(data =>
		remoteData.map(data, data =>
			pipe(
				data,
				array.map(course => ({ id: course.id, title: course.title, description: course.description })),
			),
		),
	);
	return { list };
};
