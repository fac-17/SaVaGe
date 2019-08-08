const tape = require("tape");
const runDBbuild = require("../database/db_build");
const getSvgquery = require("../src/queries/getSVGsquery");

tape("tape is working?", t => {
    t.equals(1, 1, "one is equal to one");
    t.end();
});

tape("Does is return the svgs?", t => {
    runDBbuild(function(err, res) {
        t.error(err, "No error");
        getSvgquery(result => {
            t.equal(result.rows.length, 3);
            t.end();
            
        })
    })
})