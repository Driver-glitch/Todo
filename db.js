// const Pool = require("pg").Pool;
// require ('dotenv').config();


// //two ways to use devConfig

// const devConfig = {
//   user: "process.env.PG_USER",
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DATABASE
// };

// // const devConfig = {
// //   connectionString: `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`,
// // };

// const pool = new Pool({connectionString: process.env.NODE_ENV === 'production' ? proConfig : devConfig});

// const conn = new Pool(
//   process.env.NODE_ENV === "production" ? devConfig : proConfig
// );


// //two ways to use this code below, which works in conjunction with devConfig

// const connectionString =
//   process.env.NODE_ENV === "production"
//     ? process.env.DATABASE_URL
//     : `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

// const conn = new Pool({ connectionString });

// // const proConfig = {
// //   connectionString: process.env.DATABASE_URL,
// // }; //coming from heroku add on

// // const proConfig =  process.env.DATABASE_URL //coming from heroku add on


// module.exports = pool;


const Pool = require("pg").Pool;
require("dotenv").config();

// const devConfig = {
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   port: process.env.PG_PORT,
// };

const devConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const proConfig = process.env.DATABASE_URL; //heroku addons

const pool = new Pool({
  connectionString:
    process.env.NODE_ENV === "production" ? proConfig : devConfig,
});

module.exports = pool;