import { Router } from 'express';
import { CourseModel } from '../models/course.model';
import { ErrorWithStatus } from '../utils/errors.utils';

export const courseRouter = Router();

courseRouter.get('/list', async (req, res) => {
	const list = await CourseModel.find({}, ['id', 'title', 'description']);
	res.json(list);
});

courseRouter.get('/:id', async (req, res) => {
	try {
		const item = await CourseModel.findById(req.params.id);
		if (item === null) {
			throw new ErrorWithStatus(404, 'Not Found');
		} else {
			res.json(item.toJSON());
		}
	} catch (e) {
		res.status(e.status || 500).json({ error: e.message });
	}
});

courseRouter.post('/add', async (req, res) => {
	const course = new CourseModel(req.body);
	try {
		const newCourse = await course.save();
		res.json(newCourse);
	} catch (e) {
		return res.status(409).json(e);
	}
});

courseRouter.patch('/update/:id', async (req, res) => {
	try {
		const data = await CourseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (data === null) {
			throw new ErrorWithStatus(404, 'Not Found');
		}
		res.json(data.toJSON());
	} catch (e) {
		res.status(409).json(e);
	}
});

courseRouter.delete('/remove/:id', async (req, res) => {
	try {
		await CourseModel.deleteOne({ _id: req.params.id });
		res.sendStatus(200);
	} catch (e) {
		res.status(500).json(e);
	}
});
