import { Router } from 'express';
import { CourseModel } from '../models/course.model';

export const courseRouter = Router();

courseRouter.get('/list', async (req, res) => {
	const list = await CourseModel.find({}).exec();
	res.json(list);
});

courseRouter.get('/:id', async (req, res) => {
	try {
		const item = await CourseModel.findById(req.params.id).exec();
		if (item) {
			res.json(item);
		} else {
			res.status(400).json({ error: 'Not Found' });
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
});

courseRouter.post('/add', (req, res) => {
	res.send('Route for add course');
});

courseRouter.post('/update', (req, res) => {
	res.send('Route for update course');
});
