const db_connection = require("../../database/db_connection");

const getSVGsQuery = cb => {
  db_connection.query(`SELECT svg.id AS id,svg.props AS props, svg.name AS name, username FROM svg JOIN login
  _details ON login_details.id = svg.id;`, (err, result) => {
    if (err) return err;
    cb(result);
  });
};

module.exports = getSVGsQuery;
