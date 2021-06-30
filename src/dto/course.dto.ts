import * as t from 'io-ts';

interface CourseText {
	type: 'TEXT';
	data: string;
}

interface CourseImg {
	type: 'IMG';
	src: string;
}

interface CourseVideo {
	type: 'VIDEO';
	src: string;
}

type CourseBody = CourseText | CourseImg | CourseVideo;

export interface CourseDto {
	title: string;
	description?: string;
	body?: Array<CourseBody>;
}

const courseText: t.Type<CourseText> = t.type({
	type: t.literal('TEXT'),
	data: t.string,
});

const courseImg: t.Type<CourseImg> = t.type({
	type: t.literal('IMG'),
	src: t.string,
});

const courseVideo: t.Type<CourseVideo> = t.type({
	type: t.literal('VIDEO'),
	src: t.string,
});

export const courseIO: t.Type<CourseDto> = t.intersection([
	t.strict({ title: t.string }),
	t.partial({
		description: t.string,
		body: t.array(t.union([courseText, courseImg, courseVideo])),
	}),
]);
