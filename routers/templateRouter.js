const Router = require('express')
const TemplateController = require("../controllers/templateController.js");
const authMiddleware = require('../middlewares/authMiddleware')
const roleMiddleware = require('../middlewares/roleMiddleware')

const templateRouter = new Router()

templateRouter.post('/templates',TemplateController.create)
templateRouter.get('/templates', TemplateController.getAll)
templateRouter.get('/templates/:id', TemplateController.getOne)
templateRouter.put('/templates', TemplateController.update)
templateRouter.delete('/templates/:id', TemplateController.delete)

module.exports = templateRouter;