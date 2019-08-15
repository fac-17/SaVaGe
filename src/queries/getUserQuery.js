const bcrypt = require('bcrypt');
const db_connection = require("../../database/db_connection");

const getUserQuery = (username, password, cb) => {
  db_connection.query(`SELECT * FROM login_details WHERE username = $1`, 
  [username],
  (err, result) => {
    if (err) cb(err);
    const storedHash = result.rows[0].password
    bcrypt.compare(password, storedHash, (error, res) => {
      console.log('stored hash  = ', result.rows[0].password);
      console.log('compare hash result = ', res);
      if(res) {
        const user = {
          id: result.id,
          username: result.username
        }
        cb(null, user);
      } else {
        cb(err);
      } 
    });
  });
};

module.exports = getUserQuery;