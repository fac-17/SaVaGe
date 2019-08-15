const dbConnection = require("../../database/db_connection");

const postSVGquery = (name, props, id, cb) => {
  dbConnection.query(
    "INSERT INTO svg(name,props,user_id) VALUES ($1, $2,$3)",
    [name, props, id],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postSVGquery;
