const db_connection = require("../../database/db_connection");

const getSVGsQuery = (id, cb) => {
  db_connection.query(`SELECT * from svg WHERE $1 = user_id`, [id], (err, result) => {
    if (err) return err;
    cb(result);
  });
};

module.exports = getSVGsQuery;
