const dbConnection = require("../../database/db_connection");

const postSHAPEquery = (name, props, type, cb) =>{
    dbConnection.query("INSERT INTO shape(name,props,type) VALUES ($1,$2,$3)", 
    [name, props, type], 
    (err, res)=>{
        if (err) return cb(err);
        cb(null, res);
    })
}

module.exports = postSHAPEquery;

