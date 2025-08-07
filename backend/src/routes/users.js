const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const router = express.Router();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});
// POST to register a new user
router.post('/register', async (req, res) => {
  const { NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, USUARIO, CONTRASEÑA, CORREO, CURP, RFC } = req.body;

  try {
    // Verifica que todos los campos obligatorios estén presentes
    if (!NOMBRE || !APELLIDO_PATERNO || !USUARIO || !CONTRASEÑA || !CORREO || !CURP || !RFC) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    const query = `
      INSERT INTO personal (NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, USUARIO, CONTRASEÑA, CORREO, CURP, RFC)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *;
    `;
    const values = [NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO || null, USUARIO, CONTRASEÑA, CORREO, CURP, RFC];
    const result = await pool.query(query, values);
    res.status(201).json({ message: 'User registered', user: result.rows[0] });
  } catch (error) {
    console.error('Registration error:', error.stack);
    if (error.code === '23505') { // Código de violación de unicidad
      res.status(400).json({ error: 'Username, email, CURP, or RFC already exists' });
    } else {
      res.status(500).json({ error: 'Registration failed', details: error.message });
    }
  }
});

// PUT to update a user (complete update)
router.put('/register/:id', async (req, res) => {
  const { id } = req.params;
  const { NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO, USUARIO, CONTRASEÑA, CORREO, CURP, RFC } = req.body;

  try {
    if (!NOMBRE || !APELLIDO_PATERNO || !USUARIO || !CONTRASEÑA || !CORREO || !CURP || !RFC) {
      return res.status(400).json({ error: 'All required fields must be provided' });
    }

    const query = `
      UPDATE personal
      SET NOMBRE = $1, APELLIDO_PATERNO = $2, APELLIDO_MATERNO = $3, USUARIO = $4, CONTRASEÑA = $5, CORREO = $6, CURP = $7, RFC = $8
      WHERE ID_PERSONAL = $9
      RETURNING *;
    `;
    const values = [NOMBRE, APELLIDO_PATERNO, APELLIDO_MATERNO || null, USUARIO, CONTRASEÑA, CORREO, CURP, RFC, id];
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User updated', user: result.rows[0] });
  } catch (error) {
    console.error('Update error:', error.stack);
    if (error.code === '23505') {
      res.status(400).json({ error: 'Username, email, CURP, or RFC already exists' });
    } else {
      res.status(500).json({ error: 'Update failed', details: error.message });
    }
  }
});

// DELETE to remove a user
router.delete('/register/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const query = 'DELETE FROM personal WHERE ID_PERSONAL = $1 RETURNING *';
    const result = await pool.query(query, [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted', user: result.rows[0] });
  } catch (error) {
    console.error('Delete error:', error.stack);
    res.status(500).json({ error: 'Delete failed', details: error.message });
  }
});

module.exports = router;