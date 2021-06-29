import { Router } from 'express';

export const coursesRouter = Router();

coursesRouter.get('/', (req, res) => {
	res.send('Routes for list courses');
});

coursesRouter.get('/:id', (req, res) => {
	res.send(`Detail view course ${req.params.id}`);
});

coursesRouter.post('/add', (req, res) => {
	res.send('Route for add course');
});

coursesRouter.post('/update', (req, res) => {
	res.send('Route for update course');
});
