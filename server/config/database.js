import pg from 'pg'

// set all of the configuration in an object
const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
}

// create a new pool of connections - a pool is a cache of database connections that can be reused, 
// so that new connections do not have to be established each time a connection is requested.
export const pool = new pg.Pool(config)