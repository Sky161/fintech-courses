import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

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

export interface Course extends mongoose.Document {
	title: string;
	description?: string;
	body?: Array<CourseBody>;
}

const courseSchema = new Schema<Course>({
	title: { type: String, required: true },
	description: String,
	body: [{ type: { type: String, required: true }, src: String, data: String }],
});

courseSchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform(doc: mongoose.Document, ret: Course) {
		delete ret._id;
	},
});

export const CourseModel = mongoose.model<Course>('Course', courseSchema);
