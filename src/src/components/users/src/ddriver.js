// ddriver.js
// author: yg <gyang274@github.com>

// establish connection via new pg.Pool() and promisify pool.query()

import pg from 'pg'

if (typeof (process.env.DATABASE_URL) === "undefined") {
  throw "404 - process.env.DATABASE_URL is undefined!"
}

// 1114 is OID for timestamp in Postgres return string as is
// pg.types.setTypeParser(1114, v => v)

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
})

pool.on('connect', () => {
  console.log('ok - connect to database ok!')
})

// query
// inputs
//  @param text: String
//  @param params: Array
// output
//  @return object: Object
export function query (text, params) {
  return new Promise(
    (resolve, reject) => {
      pool.query(
        text, params
      ).then(
        (response) => {
          resolve(response)
        }
      ).catch(
        (error) => { 
          reject(error)
        }
      )
    }
  )
}


// exports
// module.exports = {
//   query
// }
export default {
  query
}
