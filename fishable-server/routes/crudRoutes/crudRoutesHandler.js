const router = require('express').Router();
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const crudRoutesHandler = (pool, tableName) => {

  console.log(`Setting up /api/${tableName} routing`);

  const pks = {
    'location': 'location_id',
    'catch': 'catch_id',
    'lure': 'lure_id',
    'bait': 'bait_id'
  };
  let pk = pks[tableName];

  router.get(`/feed/${tableName}`, async (req, res) => {
    try {

      let query = '';
      if (tableName == "location") {
        query = `SELECT *,
        ST_Y(latlong::geometry) AS lat,
        ST_X(latlong::geometry) AS lng
        FROM ${tableName}
        ORDER BY ${pk} DESC;`;
      } else {
        query = `SELECT * FROM ${tableName} ORDER BY ${pk} DESC LIMIT 20;`;
      }
      let { rows } = await pool.query(query);

      rows = rows.map((r, i) => {
        if (r.lat && r.lng) {
          r.latlong = `${r.lat}, ${r.lng}`;
        }
        return r;
      })

      res.json(rows);
    } catch (error) {
      console.error('Error fetching public items:', error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  async function getRows(tableName, userId) {
    let query = '';
    if (tableName == "location") {
      query = `SELECT *,
        ST_Y(latlong::geometry) AS lat,
        ST_X(latlong::geometry) AS lng
        FROM ${tableName}
        WHERE account_id = $1
        ORDER BY ${pk} DESC;`;
    } else {
      query = `SELECT * FROM ${tableName} WHERE account_id = $1 ORDER BY ${pk} DESC;`;
    }

    try {
      let { rows } = await pool.query(query, [userId]);
      return rows.map((r, i) => {
        if (r.lat && r.lng) {
          r.latlong = `${r.lat}, ${r.lng}`;
        }
        return r;
      })

    } catch (error) {
      console.error('Error in getRows:', error);
      throw error;
    }
  }

  router.get(`/${tableName}`, async (req, res) => {
    try {
      let rows = await getRows(tableName, req.userId);
      res.json(rows);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  router.post(`/${tableName}`, async (req, res) => {
    let { name = '', image = '', latlong = null, price = '', description = '', lat = '', lng = '' } = req.body;
    let fields, sql, values = [];

    if (tableName === "location") {
      fields = "name, image, latlong, description, account_id";
      if (latlong && (!lat && !lng)) {
        [lat, lng] = latlong.split(', ').map(Number);
      }
      const point = `POINT(${lng} ${lat})`;
      values = [name, image, point, description, req.userId];
    } else if (tableName === "lure" || tableName === "bait") {
      fields = "name, image, price, description, account_id";
      values = [name, image, price, description, req.userId];
    } else if (tableName === "catch") {
      fields = "name, image, description, account_id";
      values = [name, image, description, req.userId];
    }

    sql = `INSERT INTO ${tableName} (${fields}) VALUES (${values.map((_, index) => `$${index + 1}`).join(', ')}) RETURNING *`;

    try {
      const { rows } = await pool.query(sql, values);
      res.status(201).json(rows[0]);
    } catch (error) {
      console.error('Error adding item:', error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  router.put(`/${tableName}/:id`, async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const sql = `UPDATE ${tableName} SET name = $1, description = $2 WHERE ${pk} = $3 AND account_id = $4 RETURNING *`;
    const values = [name, description, id, req.userId];

    try {
      const { rows } = await pool.query(sql, values);
      if (rows.length === 0) res.status(404).json({ message: `${tableName} item not found or access denied` });
      else res.json(rows[0]);
    } catch (error) {
      console.error(`Error updating ${tableName} item:`, error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  router.delete(`/${tableName}/:id`, async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM ${tableName} WHERE ${pk} = $1 AND account_id = $2`;
    const values = [id, req.userId];

    try {
      const { rowCount } = await pool.query(sql, values);
      if (rowCount === 0) res.status(404).json({ message: `${tableName} item not found or access denied` });
      else res.json({ message: `${tableName} item deleted successfully` });
    } catch (error) {
      console.error(`Error deleting ${tableName} item:`, error);
      res.status(500).json({ message: 'An unexpected error occurred' });
    }
  });

  return router;
}

module.exports = crudRoutesHandler;
