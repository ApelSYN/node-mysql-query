mysql-query
===========

Example:

var query = require('mysql-query');

var qs = "show databases";

// Max params
// query(qs, ['param1','param2'], 'master', function(err, rows, fields) {

// Min params
query(qs, function(err, rows, fields) {
    if (rows.length) {
        console.log(rows);
        process.exit(0);
    } else {
        new Error('There is an Error ');
    }
});

