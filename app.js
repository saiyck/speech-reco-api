require('dotenv').config();
const express = require('express');
const allRoutes = require('./src/allRoutes');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.json());
app.use('/riktam/openapi/v1',allRoutes);

app.listen(PORT, (error) =>{
	if(!error)
		console.log(`Server is Successfully Running, and App is listening on port `+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
