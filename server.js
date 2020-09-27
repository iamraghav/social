const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const user = require('./routes/user');

const app = express();

app.use(express.json());

app.use('/api/users/', user);

// Configure mongoose
mongoose.connect(process.env.MONGO_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Connect to mongoDB
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

const PORT = 8000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
