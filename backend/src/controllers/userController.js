const pool = require('../config/db');

exports.updateStatusFromToken = async (req, res) => {
  const userId = req.user.user_id; 
  const { has_seen_intro, has_set_goals } = req.body;

  try {
    const updateQuery = `
      UPDATE users 
      SET 
        has_seen_intro = COALESCE($1, has_seen_intro),
        has_set_goals = COALESCE($2, has_set_goals)
      WHERE user_id = $3
      RETURNING *;
    `;
    const result = await pool.query(updateQuery, [has_seen_intro, has_set_goals, userId]);
    if (result.rows.length === 0) return res.status(404).json({ msg: "User not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};