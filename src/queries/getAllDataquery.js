const db_connection=require('../../database/db_connection');

const getAllDataQuery=(cb)=>{
    db_connection.query(`SELECT svg.props as svg_props ,svg.name AS svg_name,
     type,shape.name AS shape_name,shape.props AS shape_props 
    FROM svg JOIN svg_shape ON svg_shape.svg_id = svg.id JOIN shape ON shape.id = svg_shape.shape_id`,
    (err,result)=>{
        if (err) return err;
        cb(result);
    })
}

module.exports = getAllDataQuery;