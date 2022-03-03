const Router = require('express')
const router = new Router()
const controller = require('../controllers/authController')
const User = require('../schemes/User')
const {check} = require('express-validator')


router.post('/registration',[
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 символов и меньше 10 символов").isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/users', controller.getUsers)
router.post('/change', controller.changePassword)

module.exports = router