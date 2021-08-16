import mongoose from 'mongoose';

export interface Question extends mongoose.Document {
	question: string;
	currentAnswerId: string;
	answers: [{ id: string; text: string }];
}

const questionSchema = new mongoose.Schema<Question>({
	question: { type: String, required: true },
	currentAnswerId: { type: String, required: true },
	answers: {
		type: [{ id: { type: String, required: true }, text: { type: String, required: true } }],
		validate: (value: unknown) => Array.isArray(value) && value.length > 0,
	},
});

export const QuestionModel = mongoose.model<Question>('Question', questionSchema);
