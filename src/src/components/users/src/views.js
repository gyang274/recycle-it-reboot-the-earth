// views.js
// author: yg <gyang274@github.com>

// express api endpoints of object users

import users from './models'

// registration
//  on view: registration
// inputs
//  @param req: post request with body { name, password }
//  @param res: 
export function registration (req, res) {
  users.registration(req.body).then(
    response => {
      return res.status(200).json(response)
    }
  ).catch(
    error => {
      return res.status(400).json(error)
    }
  )
}

// authenticate
//  on view: authenticate
// inputs
//  @param req: post request with body { name, password }
//  @param res: 
export function authenticate (req, res) {
  users.authenticate(req.body).then(
    response => {
      return res.status(200).json(response)
    }
  ).catch(
    error => {
      return res.status(400).json(error)
    }
  )
}

// updatePassword
//  on view: updatePassword
// inputs
//  @param req: post request with body { name, password }
//  @param res: 
export function updatePassword (req, res) {
  users.updatePassword(req.body).then(
    response => {
      return res.status(200).json(response)
    }
  ).catch(
    error => {
      return res.status(400).json(error)
    }
  )
}

// updateProperty
//  on view: updateProperty
// inputs
//  @param req: post request with body { name, property1, property2, ... }
//  @param res: 
export function updateProperty (req, res) {
  users.updateProperty(req.body).then(
    response => {
      return res.status(200).json(response)
    }
  ).catch(
    error => {
      return res.status(400).json(error)
    }
  )
}


// exports
// module.exports = {
//   registration,
//   authenticate,
//   updatePassword,
//   updateProperty
// }
export default {
  registration,
  authenticate,
  updatePassword,
  updateProperty
}