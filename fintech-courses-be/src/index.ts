import express from 'express';

const PORT = process.env.port ?? 3000;

const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on http://localhost:${PORT}`);
});
