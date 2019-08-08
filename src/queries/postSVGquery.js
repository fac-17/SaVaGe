const dbConnection = require("../../database/db_connection");

const postSVGquery = (name, props, cb) => {
  dbConnection.query(
    "INSERT INTO svg(name,props) VALUES ($1, $2)",
    [name, props],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postSVGquery;
