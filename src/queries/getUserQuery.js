const bcrypt = require('bcrypt');
const db_connection = require("../../database/db_connection");

const getUserQuery = (user, inputPassword, cb) => {
  db_connection.query(`SELECT * FROM login_details WHERE username = $1`, [user],
  (err, result) => {
    if (err) {
      cb(err);
    } else if (result.rows.length == 0) {
      cb('user not found');
    } else {
      const {id, username, password} = result.rows[0]
      console.log('stored hash password  = ', password);
      bcrypt.compare(inputPassword, password, (error, res) => {
        if (err) cb(err);
        console.log('compare hash result = ', res);
        if(res) {
          const userDetails = { id, username }
          cb(null, userDetails);
        } else {
          cb('password incorrect');
        } 
      });
    }
  });
};

module.exports = getUserQuery;