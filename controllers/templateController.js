const TemplateService = require("../services/templateService.js");
const templateService = require("../services/templateService.js");

class TemplateController{
    async create(req, res) {
        try {
            const template = await TemplateService.create(req.body)
            // res.json(template)
            res.redirect('/templates')
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const templates = await TemplateService.getAll()
            return res.json(templates)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const template = await templateService.getOne(req.params.id)
            return res.json(template)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedTemplate = await TemplateService.update(req.body)
            return res.redirect('/templates')
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const template = await TemplateService.delete(req.body);
            return res.redirect('/templates')
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

module.exports = new TemplateController();