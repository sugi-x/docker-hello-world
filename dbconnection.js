const {Client} = require('pg')

const client = new Client({
    host: "34.143.223.204",
    user: "postgres",
    port: 5432,
    password: "supersecret!",
    database: "orders"
})

module.exports = client