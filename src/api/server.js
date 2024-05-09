const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();

const PORT = 3001;

app.use(express.json());
app.use(cors());

// Configuración de la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'root',
  password: '123456',
  database: 'sys'
});

db.connect(err => {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Conectado a la base de datos MySQL.');
});

// Ruta para registrar un nuevo usuario
app.post('/api/register', async (req, res) => {
  const { nombre, correo, clave } = req.body;

  // Verificar si el correo ya está registrado
  db.query('SELECT correo FROM Usuario WHERE correo = ?', [correo], async (error, results) => {
    if (error) {
      return res.status(500).send({ message: "Error al verificar el usuario", error });
    }

    if (results.length > 0) {
      return res.status(409).send({ message: 'El correo ya está registrado' });
    }

    // Si no está registrado, proceder con la creación del usuario
    const hashedPassword = await bcrypt.hash(clave, 8);
    db.query('INSERT INTO Usuario (nombre, correo, clave, fechaRegistro, rol) VALUES (?, ?, ?, CURDATE(), "usuario")', 
             [nombre, correo, hashedPassword], 
             (error, results) => {
      if (error) {
        return res.status(500).send({ message: "Error al registrar el usuario", error });
      }
      res.status(201).send({ message: 'Usuario registrado correctamente' });
    });
  });
});

// Ruta para iniciar sesión
app.post('/api/login', (req, res) => {
  const { correo, clave } = req.body;
  db.query('SELECT * FROM Usuario WHERE correo = ?', [correo], async (error, results) => {
    if (error || results.length === 0 || !(await bcrypt.compare(clave, results[0].clave))) {
      res.status(401).send({ message: 'Credenciales incorrectas' });
    } else {
      res.status(200).send({ message: 'Inicio de sesión exitoso' });
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

