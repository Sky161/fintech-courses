import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = process.env.PORT ?? 8080;

//INIT APPS
const app = express();
dotenv.config();

//USE MIDDLEWARES
app.use(express.static(path.join(__dirname, '../', '/fintech-courses-fe/build')));

//USE ROUTES
app.get('/', (req, res) => {
	res.sendFile('index.html');
});

//RUN APPLICATION
if (process.env.DB_URL) {
	mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
} else {
	// eslint-disable-next-line no-console
	console.error('Provide DB_URL for start application!');
}

const db = mongoose.connection;
// eslint-disable-next-line no-console
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', function () {
	app.listen(PORT, () => {
		// eslint-disable-next-line no-console
		console.log(`Server is running on http://localhost:${PORT}`);
	});
});