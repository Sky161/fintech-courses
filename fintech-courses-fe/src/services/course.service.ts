import { failure, success } from '@devexperts/remote-data-ts';
import { HttpClient, ResponseData } from '../clients/http.client';
import { Course, courseDTO, courseListDTO } from './dto/course.dto';

interface CourseContext {
	httpClient: HttpClient;
}

export interface CourseService {
	getListCourses: () => ResponseData<Course[]>;
	getCourse: (id: string) => ResponseData<Course>;
}

export const createCourseService = (ctx: CourseContext): CourseService => {
	const getListCourses = async () => {
		try {
			const request = await ctx.httpClient.GET('/api/course/list');
			const data = await request.json();
			const parsedData = courseListDTO.parse(data);
			return success(parsedData);
		} catch (e) {
			return failure(e);
		}
	};

	const getCourse = async (id: string) => {
		try {
			const request = await ctx.httpClient.GET(`/api/course/${id}`);
			const data = await request.json();
			const parsedData = courseDTO.parse(data);
			return success(parsedData);
		} catch (e) {
			return failure(e);
		}
	};

	return {
		getListCourses,
		getCourse,
	};
};
