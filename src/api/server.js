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
  host: 'finanzapp.cloud',
  port: 3306,
  user: 'u980228585_root',
  password: 'Cc.211187',
  database: 'u980228585_sys'
});

db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
    process.exit(1);
  }
  console.log('Conectado a la base de datos MySQL.');
});

// Ruta para registrar un nuevo usuario
app.post('/api/register', async (req, res) => {
  const { nombre, correo, clave } = req.body;
  try {
    const [results] = await db.promise().query('SELECT correo FROM Usuario WHERE correo = ?', [correo]);
    if (results.length > 0) {
      return res.status(409).send({ message: 'El correo ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(clave, 8);
    await db.promise().query('INSERT INTO Usuario (nombre, correo, clave, fechaRegistro, rol) VALUES (?, ?, ?, CURDATE(), "usuario")', [nombre, correo, hashedPassword]);
    res.status(201).send({ message: 'Usuario registrado correctamente' });
  } catch (error) {
    res.status(500).send({ message: 'Error al registrar el usuario', error: error.message });
  }
});


// Ruta para iniciar sesión
app.post('/api/login', async (req, res) => {
  const { correo, clave } = req.body;
  try {
    const [results] = await db.promise().query('SELECT * FROM Usuario WHERE correo = ?', [correo]);
    if (results.length === 0 || !(await bcrypt.compare(clave, results[0].clave))) {
      return res.status(401).send({ message: 'Credenciales incorrectas' });
    }
    res.status(200).send({ message: 'Inicio de sesión exitoso' });
  } catch (error) {
    res.status(500).send({ message: 'Error en el servidor', error: error.message });
  }
});

// Actualizar datos del usuario
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, correo, clave } = req.body;
  try {
      const hashedPassword = clave ? await bcrypt.hash(clave, 8) : undefined;
      let query = 'UPDATE Usuario SET nombre = ?, correo = ?' + (hashedPassword ? ', clave = ?' : '') + ' WHERE id = ?';
      let params = hashedPassword ? [nombre, correo, hashedPassword, id] : [nombre, correo, id];
      const [result] = await db.promise().query(query, params);
      if (result.affectedRows) {
          res.status(200).send({ message: 'Datos actualizados correctamente' });
      } else {
          res.status(404).send({ message: 'Usuario no encontrado' });
      }
  } catch (error) {
      res.status(500).send({ message: 'Error al actualizar usuario', error: error.message });
  }
});

// Eliminar usuario
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
      const [result] = await db.promise().query('DELETE FROM Usuario WHERE id = ?', [id]);
      if (result.affectedRows) {
          res.status(200).send({ message: 'Usuario eliminado correctamente' });
      } else {
          res.status(404).send({ message: 'Usuario no encontrado' });
      }
  } catch (error) {
      res.status(500).send({ message: 'Error al eliminar usuario', error: error.message });
  }
});

// Listar usuarios (para administradores)
app.get('/api/users', async (req, res) => {
  try {
      const [users] = await db.promise().query('SELECT id, nombre, correo, rol FROM Usuario');
      res.status(200).json(users);
  } catch (error) {
      res.status(500).send({ message: 'Error al obtener usuarios', error: error.message });
  }
});


// Rutas para las categorías
// Obtener todas las categorías
app.get('/api/categories', (req, res) => {
  db.query('SELECT * FROM CategoriaGastos', (error, results) => {
    if (error) {
      return res.status(500).send({ message: "Error al obtener categorías", error });
    }
    res.status(200).json(results);
  });
});

// Agregar una nueva categoría
app.post('/api/categories', (req, res) => {
  const { nombre, descripcion } = req.body;
  db.query('INSERT INTO CategoriaGastos (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion], (error, results) => {
    if (error) {
      return res.status(500).send({ message: "Error al agregar categoría", error });
    }
    res.status(201).send({ message: 'Categoría agregada correctamente', id: results.insertId });
  });
});

// Actualizar una categoría
app.put('/api/categories/:id', (req, res) => {
  const { nombre, descripcion } = req.body;
  const { id } = req.params;
  db.query('UPDATE CategoriaGastos SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id], (error, results) => {
    if (error) {
      return res.status(500).send({ message: "Error al actualizar la categoría", error });
    }
    res.status(200).send({ message: 'Categoría actualizada correctamente' });
  });
});

// Eliminar una categoría
app.delete('/api/categories/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM CategoriaGastos WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).send({ message: "Error al eliminar la categoría", error });
    }
    res.status(200).send({ message: 'Categoría eliminada correctamente' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
