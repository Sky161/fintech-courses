import { Router } from 'express';
import { CourseModel } from '../models/course.model';
import { ErrorWithStatus } from '../utils/errors.utils';

export const courseRouter = Router();

courseRouter.get('/list', async (req, res) => {
	const list = await CourseModel.find({}).exec();
	res.json(list);
});

courseRouter.get('/:id', async (req, res) => {
	try {
		const item = await CourseModel.findById(req.params.id).exec();
		if (item === null) {
			throw new ErrorWithStatus(404, 'Not Found');
		}
		res.json(item);
	} catch (e) {
		res.status(e.status || 500).json({ error: e.message });
	}
});

courseRouter.post('/add', (req, res) => {
	const course = new CourseModel(req.body);
	course.save(err => {
		if (err) {
			return res.status(403).json(err);
		}
		res.json(course.toJSON());
	});
});

courseRouter.post('/update', (req, res) => {
	res.send('Route for update course');
});
