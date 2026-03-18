const express = require('express');
const mysql = require('mysql2'); // Importamos el conector
const cors = require('cors');
require('dotenv').config();
const app = express();
const puerto = 3000;

app.use(cors());
// IMPORTANTE: Esto permite que Express lea el JSON que le enviemos (ej. desde el frontend)
app.use(express.json());

// Configuramos la conexión a tu base de datos (reemplaza con tus datos reales)
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('¡Conectado a la base de datos MySQL! 🗄️');
});

// --- TUS RUTAS ---

// Ruta de Login
app.post('/api/login', (req, res) => {

    console.log("Datos desde Postman:", req.body); // <--- AGREGA ESTA LÍNEA
    // Extraemos los datos que nos envían en la petición
    const { nombre, password } = req.body;

    // Buscamos si existe un usuario con ese nombre y contraseña en tu tabla
    const query = 'SELECT * FROM users WHERE nombre = ? AND password = ?';

    db.query(query, [nombre, password], (err, resultados) => {
        if (err) {
            return res.status(500).json({ error: 'Error en el servidor' });
        }

        // Si el array de resultados está vacío, los datos son incorrectos
        if (resultados.length === 0) {
            return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
        }

        // Si encontró al usuario, el login es exitoso
        const usuario = resultados[0];
        res.json({
            mensaje: '¡Login exitoso, bro!',
            usuario: {
                id: usuario.id,
                nombre: usuario.nombre
            }
        });
    });
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}`);
});