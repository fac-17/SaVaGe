const dbConnection = require("../../database/db_connection");

const insertSVG_SHAPEquery = (svg_id, shape_id, user_id, cb) => {
    dbConnection.query("INSERT INTO svg_shape(svg_id, shape_id, user_id) VALUES ($1,$2,$3)", 
    [svg_id, shape_id, user_id],
    (err, res) => {
        if (err) return (err);
        cb(null, res);
    })
};


module.exports = insertSVG_SHAPEquery;