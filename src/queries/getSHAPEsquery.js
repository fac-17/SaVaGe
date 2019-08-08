const dbConnection = require("../../database/db_connection");

const getSHAPEsquery = cb => {
  dbConnection.query("SELECT * FROM shape", (err, res) => {
    if (err) return err;
    cb(res);
  });
};

module.exports = getSHAPEsquery;
