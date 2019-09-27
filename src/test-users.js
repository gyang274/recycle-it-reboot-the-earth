// test-users.js
// author: yg <gyang274@github.com>

// config process.env.<variable>
import './config'

const axios = require('axios')

// models
import users from './src/components/users/src/models'

// run once
// users.registration({
//   name: 'dd', password: '12345678'
// }).then(
//   response => console.log('models registration response', response)
// ).catch(
//   error => console.log('models registration error:', error)
// )

// users.authenticate({
//   name: 'yg', password: '12345678'
// }).then(
//   response => console.log('models authenticate response', response)
// ).catch(
//   error => console.log('models authenticate error:', error)
// )

// users.updatePassword({
//   name: 'yg', password: 'abcdefgh'
// }).then(
//   response => console.log('models updatePassword response', response)
// ).catch(
//   error => console.log('models updatePassword error:', error)
// )

// users.updateProperty({
//   name: 'yg', image: '0x01', coins: 10, score: 10, title: 'Professor', stats: [2, 3, 5],
//   achievements: ['0x02', '0x03', '0x05', '0x08'], last_login: (new Date()).toJSON()
// }).then(
//   response => console.log('models updateProperty response', response)
// ).catch(
//   error => console.log('models updateProperty error:', error)
// )

// users.select({
//   name: 'yg'
// }).then(
//   response => console.log('models select response', response)
// ).catch(
//   error => console.log('models select error:', error)
// )

// users.selectAll({

// }).then(
//   response => console.log('models selectAll response', response)
// ).catch(
//   error => console.log('models selectAll error:', error)
// )

// views
// import views from './src/components/users/src/views'

// run once
// axios.post('http://127.0.0.1:3000/api/v1/users/registration', {
//   name: 'qq', password: '12345678'
// }).then(
//   response => console.log('views registration response', response.data)
// ).catch(
//   error => console.log('views registration error:', error.response.data)
// )

// axios.post('http://127.0.0.1:3000/api/v1/users/authenticate', {
//   name: 'yg', password: '12345678'
// }).then(
//   response => console.log('views authenticate response', response.data)
// ).catch(
//   error => console.log('views authenticate error:', error.response.data)
// )

// axios.post('http://127.0.0.1:3000/api/v1/users/updatePassword', {
//   name: 'yg', password: 'abcedfgh'
// }).then(
//   response => console.log('views updatePassword response', response.data)
// ).catch(
//   error => console.log('views updatePassword error:', error.response.data)
// )

// axios.post('http://127.0.0.1:3000/api/v1/users/updateProperty', {
//   name: 'yg', image: '0x01', coins: 10, score: 10, title: 'Professor', stats: [2, 3, 5], 
//   achievements: ['0x02', '0x03', '0x05', '0x08'], last_login: (new Date()).toISOString()
// }).then(
//   response => console.log('views updateProperty response', response.data)
// ).catch(
//   error => console.log('views updateProperty error:', error.response.data)
// )
