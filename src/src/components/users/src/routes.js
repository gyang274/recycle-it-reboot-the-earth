// routes.js
// author: yg <gyang274@github.com>

// routes within api endpoint of users, e.g. '/api/v1/users' 

import express from 'express'
import views from './views'

export let router = express.Router()

router.post('/registration', views.registration)
router.post('/authenticate', views.authenticate)
router.post('/updatePassword', views.updatePassword)
router.post('/updateProperty', views.updateProperty)


// exports
// module.exports = {
//   router
// }
export default {
  router
}
