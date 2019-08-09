const tape = require("tape");
const queries = require('../src/queries');
const runDBbuild = require("../database/db_build");
const getSvgquery = require("../src/queries/getSVGsquery");
const getShapequery = require("../src/queries/getSHAPEsquery");

tape("tape is working?", t => {
    t.equals(1, 1, "one is equal to one");
    t.end();
});

tape("What is the number of rows in svg table?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error");
        queries.getSVGsQuery(result => {
            t.equal(result.rows.length, 3);
            t.end();
            
        })
    })
});

tape("What is the value of name and props in the first row?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error ");
        let expected= {name:'picasso',props:'{"fill":"pink"}',id:1};
        queries.getSVGsQuery(result => {
            t.deepEqual(result.rows[0], expected);
            t.end();
        })
    })
});

tape("What is the number of rows in shape table?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error");
        queries.getSHAPEsquery(result => {
            t.equal(result.rows.length, 5)
            t.end();
        })
    })
});

tape("What are the values of name, props and type in the second row?- shape table", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error ");
        let expected= { name:'sq',type:'rect',props:'{"x":20,"y":30,"width":40,"height":40}', id:2};
        queries.getSHAPEsquery(result => {
            t.deepEqual(result.rows[1], expected);
            t.end();
        })
    })
});