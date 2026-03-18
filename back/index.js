const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const puerto = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importamos las rutas
const authRoutes = require('./routes/auth.routes');

// Le decimos a Express que use esas rutas
app.use('/auth', authRoutes);

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});