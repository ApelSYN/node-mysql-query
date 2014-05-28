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
         "mysql-query": "git://github.com/ApelSYN/node-mysql-query.git#master"
      }

      or

      "dependencies": {
         "mysql-query": "https://github.com/ApelSYN/node-mysql-query/tarball/master"
      }

**Install the package:**

      my-project$ npm install mysql-query

***Edit the mysql configuration file:**

      my-project$ vi config/default.js

      module.exports = {
            database: {
                master: {
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: "3306",
                    database: "test",
                    connectionLimit: 3
                }
      }

      See <a href="https://www.npmjs.org/package/config">Config</a> about using 'config' module
