import express from 'express';
import dotenv from 'dotenv';

import catRoutes from './routes/cats.js';

// configure dotenv
dotenv.config();

const PORT = process.env.PORT || 5009;

// initialize express
const app = express();

// parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use routes
app.use('/api', catRoutes);

// error 404
app.use('*', (req, res) => {
    res.status(404).send(`404: Page not found`);
});

//handler error
app.use((err, req, res) => {
    console.error(err);
    res.status(500).send('Server is down!');
});

// listen
app.listen(PORT, () => {
    console.log(`Server is up and running on port : ${PORT}`);
});
