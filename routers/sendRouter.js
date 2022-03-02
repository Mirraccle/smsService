const Router = require('express')
const SendController = require("../controllers/sendController.js");

const sendRouter = new Router()

sendRouter.post('/sendMessage', SendController.send)
sendRouter.get('/sendMessage', SendController.getAllMessages)

module.exports = sendRouter;