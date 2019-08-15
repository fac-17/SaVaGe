const db_connection = require("../../database/db_connection");

const getUserQuery = (username, password, cb) => {
  db_connection.query(`SELECT username, id FROM login_details WHERE username = $1 AND password = $2`, 
  [username, password],
  
  (err, result) => {
    if (err) cb(err);
    cb(null, result);
  });
};

module.exports = getUserQuery;