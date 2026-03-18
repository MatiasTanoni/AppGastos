const mysql = require('mysql2');
require('dotenv').config(); // Para que reconozca las variables del .env

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

// ESTO ES CLAVE: Exportamos la conexión para usarla en otros archivos
module.exports = db;