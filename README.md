mysql-query
===========

Mysql service query interface for simple build sql query through mysql pool connections


Introduction
------------

Example:

var query = require('mysql-query');

var qs = "show databases";

query(qs, ['param1','param2'], 'master', function(err, rows, fields) {
    if (rows.length) {
        console.log(rows);
        process.exit(0);
    } else {
        new Error('There is an Error ');
    }
});



Quick Start
-----------

**In your project directory, install and verify using npm:**

      my-project$ npm init

**Edit the default package.json file:**

      (example fragment of package.json file):

      "dependencies": {
         "connect": "git://github.com/ApelSYN/node-mysql-query.git#master"
      }

**Install the package:**
      my-project$ npm install mysql-query