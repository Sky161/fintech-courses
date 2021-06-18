import express from 'express';
import path from 'path';

const PORT = process.env.PORT ?? 8080;

const app = express();
app.use(express.static(path.join(__dirname, '../', '/fintech-courses-fe/build')));
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on http://localhost:${PORT}`);
});
