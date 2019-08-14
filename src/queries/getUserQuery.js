const db_connection = require("../../database/db_connection");

const getUserQuery = cb => {
  db_connection.query(`SELECT * from login_details`, (err, result) => {
    if (err) return err;
    cb(result);
  });
};

module.exports = getUserQuery;