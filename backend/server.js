const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// GET all personal records
app.get('/api/personal', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM personal');
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'No records found' });
    }
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error.stack);
    res.status(500).json({ error: 'Error fetching data', details: error.message });
  }
});

// Update and delete routes will be handled in users.js
const userRoutes = require('./src/routes/users');
app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));