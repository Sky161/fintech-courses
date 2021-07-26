import { z } from 'zod';

export const courseTextDTO = z.object({
	type: z.literal('TEXT'),
	data: z.string(),
});
export type CourseText = z.infer<typeof courseTextDTO>;

export const courseImgDTO = z.object({
	type: z.literal('IMG'),
	src: z.string(),
});
export type CourseImg = z.infer<typeof courseImgDTO>;

export const courseVideoDTO = z.object({
	type: z.literal('VIDEO'),
	src: z.string(),
});
export type CourseVideo = z.infer<typeof courseVideoDTO>;

export const courseBodyDTO = z.union([courseTextDTO, courseImgDTO, courseVideoDTO]);
export type CourseBody = z.infer<typeof courseBodyDTO>;

export const courseDTO = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().optional(),
	body: z.array(courseBodyDTO).optional(),
});
export type Course = z.infer<typeof courseDTO>;

export const courseListDTO = z.array(courseDTO);
export type CourseList = z.infer<typeof courseListDTO>;
