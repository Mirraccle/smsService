const Router = require('express')
const Message = require('../schemes/sendSchema.js')
const Template = require('../schemes/templateSchema')
const User = require('../schemes/User')
const pagesRouter = new Router()
// const authMiddleware = require('../middlewares/authMiddleware')
// const roleMiddleware = require('../middlewares/roleMiddleware')
// const axios = require("axios");

const isAuth = (req, res, next) => {
    if (req.session.isAuth === true) {

        next()

    } else {
        res.redirect('/auth')
    }
}



pagesRouter.get('/', isAuth, async (req, res) => {
    req.session.isAuth = true
    const messages = await Message.find({user:req.session.user}).limit(10).sort({$natural:-1}).lean(true)
    const templates = await Template.find().lean(true);

    res.render('index', {
        title: 'Главная страница',
        isIndex: true,
        messages,
        templates,
        user: req.session.user
    })

})

pagesRouter.get('/me', isAuth, async (req, res) => {
    req.session.isAuth = true

    res.render('settings', {
        title: 'Настройки',
        isSettings: true,
        user: req.session.user
    })

})

pagesRouter.get('/templates', isAuth, async (req, res) => {
    const templates = await Template.find().lean(true)
    const role = await User.find({roles : "ADMIN", username: req.session.user})
    if (role.length === 0) {
        res.render('templates-for-users', {
            title: 'Шаблоны',
            isTemplates: true,
            templates
        })
    } else {
        res.render('templates', {
            title: 'Шаблоны',
            isTemplates: true,
            templates
        })
    }
})

pagesRouter.get('/users', isAuth, async (req, res) => {
    const users = await User.find().lean(true)
    const role = await User.find({roles : "ADMIN", username: req.session.user})
    if (role.length === 0) {
        res.render('users-for-users', {
            title: 'Пользователи',
            isUsers: true,
            users
        })
    } else {
        res.render('users', {
            title: 'Пользователи',
            isUsers: true,
            users
        })
    }

})

const notAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/')
    }
    next()
}

pagesRouter.get('/auth', notAuth, async (req, res) => {
    res.render('auth', {
        title: 'Вход',
        isAuth: true,
    })
})

module.exports = pagesRouter;