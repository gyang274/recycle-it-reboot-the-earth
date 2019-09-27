// index.js
// author: yg <gyang274@github.com>

// usage
// import users from '/path/to/users'
// // const users = require('/path/to/users')
// app.use('/api/v1/users', users.router)

import routes from './src/routes'
// let routes = require('./src/routes')

export let router = routes.router


// module.exports = {
//   router: routes.router
// }
export default {
  router: routes.router
}