import { failure, RemoteData, success } from '@devexperts/remote-data-ts';
import { ZodError } from 'zod';
import { HttpClient } from '../clients/http.client';
import { Course, courseListDTO } from './dto/course.dto';

interface CourseContext {
	httpClient: HttpClient;
}

interface CourseService {
	list: Promise<RemoteData<ZodError | Error, Course[]>>;
}

export const createCourseService = (ctx: CourseContext): CourseService => {
	const list = ctx.httpClient
		.GET('/api/course/list')
		.then(data => data.json())
		.then(data => courseListDTO.safeParse(data))
		.then(data => {
			if (data.success) {
				return success(data.data);
			} else {
				return failure(data.error);
			}
		})
		.catch(error => failure(error));

	return {
		list,
	};
};
