const tape = require("tape");
const runDBbuild = require("../database/db_build");
const getSvgquery = require("../src/queries/getSVGsquery");

tape("tape is working?", t => {
    t.equals(1, 1, "one is equal to one");
    t.end();
});

tape("What is the number of rows in svg table?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error");
        getSvgquery(result => {
            t.equal(result.rows.length, 3);
            t.end();
            
        })
    })
});

tape("What is the value of name and props in the first row?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error ");
        let expected= {name:'picasso',props:'{"fill":"pink"}',id:1};
        getSvgquery(result => {
            t.deepEqual(result.rows[0], expected);
            t.end();
        })
    })
});

tape("", t => {
    runDBbuild(function(err, res) {
        t.error

    }
    t.expected

})