const pgp = require('pg-promise')();

// Database connection details;
const cn = {
    host: 'cockroachdb', // 'localhost' is the default;
    port: 26257, // 5432 is the default;
    database: 'cze_catalog',
    user: 'root',
};

const db = pgp(cn); // database instance;

db.tx(async t => {
    const data = await t.any('select data from taxonomy', [true]);
    console.log(data);
});

