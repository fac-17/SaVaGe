const db_connection = require("../../database/db_connection");

const getSVGsQuery = cb => {
  db_connection.query(`SELECT * from svg`, (err, result) => {
    if (err) return err;
    cb(result);
  });
};

module.exports = getSVGsQuery;
