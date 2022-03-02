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


pagesRouter.get('/', async (req, res) => {
    req.session.isAuth = true
    const messages = await Message.find().limit(10).sort({$natural:-1}).lean(true)
    const templates = await Template.find().lean(true);
    res.render('index', {
        title: 'Главная страница',
        isIndex: true,
        messages,
        templates
    })
})

pagesRouter.get('/templates', async (req, res) => {
    const templates = await Template.find().lean(true)
    res.render('templates', {
        title: 'Шаблоны',
        isTemplates: true,
        templates
    })
})

pagesRouter.get('/users', async (req, res) => {
    const users = await User.find().lean(true)
    res.render('users', {
        title: 'Пользователи',
        isUsers: true,
        users
    })
})

const notAuth = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/')
    }
    next()
}

pagesRouter.get('/auth', async (req, res) => {
    res.render('auth', {
        title: 'Вход',
        isAuth: true
    })
})

module.exports = pagesRouter;