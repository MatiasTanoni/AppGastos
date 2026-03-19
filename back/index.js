const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/routes');

const app = express();
const puerto = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', routes);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});