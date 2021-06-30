import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import { CourseDto } from '../dto/course.dto';

type Course = CourseDto & mongoose.Document;

const courseSchema = new Schema<Course>({
	title: { type: String, required: true },
	description: String,
	body: [{ type: String, src: String, data: String }],
});

courseSchema.set('toJSON', {
	virtuals: true,
	versionKey: false,
	transform(doc: mongoose.Document, ret: Course) {
		delete ret._id;
	},
});

export const CourseModel = mongoose.model<Course>('Course', courseSchema);
