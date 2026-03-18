const db = require('../config/db'); // Tu archivo de conexión

const login = (req, res) => {
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
};

const logout = (req, res) => {
    // Lógica para cerrar sesión
};

module.exports = { login, logout };