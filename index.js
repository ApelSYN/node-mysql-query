var query = require('./lib/mysql-query');

var qs = "show databases";

query(qs, [1,2], 'master', function(err, rows, fields) {
    if (rows.length) {
        console.log(rows);
        process.exit(0);
    } else {
        new Error('There is an Error ');
    }
});

