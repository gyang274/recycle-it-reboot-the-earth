// models.js
// author: yg <gyang274@github.com>

// database operations on table users

// users
//  @col name: String, Primary Key
//  @col password: String, bcrypt hashed value
//  @col last_login: Timestamp
//  @col created_on: Timestamp
//  @optionalColumns properties, e.g., image, coins, score, title, stats, achievements etc.

import pg from 'pg'
import bcrypt from 'bcrypt'
import ddriver from './ddriver'

const saltOrRounds = 10

// create
//  @param payload: { name, password (hashed) }
export function create (payload) {
  return new Promise(
    (resolve, reject) => {
      ddriver.query(
        'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING name', [
          payload.name, payload.password
        ]
      ).then(
        response => {
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// registration
//  @param payload: { name, password (plain) }
export function registration (payload) {
  return new Promise(
    (resolve, reject) => {
      isUserValid(
        payload
      ).then(
        () => {
          return bcrypt.hash(payload.password, saltOrRounds)
        }
      ).then(
        (hashed) => {
          payload.password = hashed
          return create(payload)
        }
      ).then(
        response => {
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// select
//  @param payload: { name, password (optional) }
export function select (payload) {
  return new Promise(
    (resolve, reject) => {
      ddriver.query(
        'SELECT * FROM users where name = $1', [payload.name]
      ).then(
        response => {
          if (response.rowCount === 1) {
            resolve(response.rows[0])
          } else {
            reject('user name no found:', payload.name)
          }
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// authenticate
//  @param payload: { name, password (required) }
export function authenticate (payload) {
  return new Promise(
    (resolve, reject) => {
      select(
        payload
      ).then(
        response => {
          return verifyPassword(payload, response)
        }
      ).then(
        response => {
          delete response.password
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// selectAll
export function selectAll () {
  return new Promise(
    (resolve, reject) => {
      ddriver.query(
        'SELECT name, last_login, created_on FROM users;'
      ).then(
        response => {
          resolve(response.rows)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// updatePassword
//  @param payload: { name, password, }
export function updatePassword (payload) {
  return new Promise(
    (resolve, reject) => {
      isPasswordValid(
        payload.password
      ).then(
        () => {
          return bcrypt.hash(payload.password, saltOrRounds)
        }
      ).then(
        (hashed) => {
          return ddriver.query(
            'UPDATE users SET password = $2 WHERE name = $1', [
              payload.name, hashed
            ]
          )
        }
      ).then(
        response => {
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// updateProperty
//  @param payload: { name, property1, property2, ... }
// export function updateProperty (payload) {
//   let queryText = "UPDATE users SET "
//   for (let [k, v] of Object.entries(payload)) {
//     if (k !== 'name' && k !== 'password') {
//       if (typeof (v) === 'number') {
//         queryText += k + " = " + v + ", "
//       } else if (typeof (v) === 'string') {
//         queryText += k + " = '" + v + "', "
//       } else if (typeof (v) === 'object' && Array.isArray(v)) {
//         // NOTE: 1D Array only!
//         if (v.length === 0) {
//           // queryText += k + " = ARRAY[" + v + "], "
//           queryText += k + " = '{" + v + "}', "
//         } else if (typeof (v[0]) === 'number') {
//           queryText += k + " = '{" + v + "}', "
//         } else if (typeof (v[0]) === 'string') {
//           queryText += k + " = '{\"" + v.join('","') + "\"}', "
//         } else {
//           throw 'updateProperty: unhandled type: 2d array.'  
//         }     
//       } else {
//         throw 'updateProperty: unhandled type: object.'
//       }
//     }
//   }
//   queryText = queryText.slice(0, -2) + " WHERE name = '" + payload.name + "';"
//   // console.log('queryText:', queryText)
//   return new Promise(
//     (resolve, reject) => {
//       ddriver.query(
//         queryText
//       ).then(
//         response => {
//           resolve(response)
//         }
//       ).catch(
//         error => {
//           reject(error)
//         }
//       )
//     }
//   )
// }

// updateProperty
//  @param payload: { name, property1, property2, ... }
export function updateProperty (payload) {
  return new Promise(
    (resolve, reject) => {
      let queries = []
      for (let [k, v] of Object.entries(payload)) {
        if (k !== 'name' && k !== 'password') {
          queries.push(
            ddriver.query(
              `UPDATE users SET ${k} = $2 WHERE name = $1`, [
                payload.name, v
              ]
            )
          )
        }
      }
      Promise.all(
        queries
      ).then(
        response => {
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// isUserValid
function isUserValid (payload) {
  return new Promise(
    (resolve, reject) => {
      isNameValid(
        payload.name
      ).then(
        () => {
          return isPasswordValid(payload.password)
        }
      ).then(
        response => {
          resolve(response)
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}

// isNameValid
function isNameValid (name, minCharacters = 2) {
  return new Promise(
    (resolve, reject) => {
      if (typeof (name) !== 'string') {
        reject('name must be a string.')  
      } else if (name.length < minCharacters) {
        reject(`name must have at least ${minCharacters} characters.`)
      } else {
        resolve()
      }
    }
  )
}

// isEmailValid
function isEmailValid (email) {
  return new Promise(
    (resolve, reject) => {
      let re =  new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)
      if (typeof (email) !== 'string') {
        reject('email must be a string.')
      } else if (!re.test(email)) {
        reject(`email must match proper format: ${email}.`)
      } else {
        resolve()
      }
    }
  )
}

// isPasswordValid
function isPasswordValid (password, minCharacters = 8) {
  return new Promise(
    (resolve, reject) => {
      if (typeof (password) !== 'string') {
        reject('password must be a string.')  
      } else if (password.length < minCharacters) {
        reject(`password must have at least ${minCharacters} characters.`)
      } else {
        resolve()   
      }
    }
  )
}

// verifyPassword
function verifyPassword (payload, user) {
  return new Promise(
    (resolve, reject) => {
      bcrypt.compare(
        payload.password, user.password
      ).then(
        response => {
          if (response) {
            resolve(user)
          } else {
            reject('user password does not match.')
          }
        }
      ).catch(
        error => {
          reject(error)
        }
      )
    }
  )
}


// exports
// module.exports = {
//   create, 
//   registration,
//   select, 
//   authenticate,
//   selectAll,
//   updatePassword,
//   updateProperty
// }
export default {
  create, 
  registration,
  select, 
  authenticate,
  selectAll,
  updatePassword,
  updateProperty
}
