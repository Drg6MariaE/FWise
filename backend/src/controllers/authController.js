const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_change_this';

exports.register = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const userCheck = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userCheck.rows.length > 0) return res.status(400).json({ msg: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await pool.query(
      `INSERT INTO users (email, username, password_hash, has_seen_intro, has_set_goals) 
       VALUES ($1, $2, $3, FALSE, FALSE) 
       RETURNING *`,
      [email, username || 'User', passwordHash]
    );

    const token = jwt.sign({ user_id: newUser.rows[0].user_id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: newUser.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (result.rows.length === 0) return res.status(400).json({ msg: 'Invalid Credentials' });

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

    const token = jwt.sign({ user_id: user.user_id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.getMe = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [req.user.user_id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};