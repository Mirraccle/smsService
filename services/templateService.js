const Template = require("../schemes/templateSchema.js")

class TemplateService{
    async create(template) {
        const createdTemplate = await Template.create(template)
        return createdTemplate;
    }

    async getAll() {
        const templates = await Template.find()
        return templates
    }
    async getOne(id) {
        if (!id) {
            throw new Error('id не указан')
        }

        const template = await Template.findById(id)
        return template
    }
    async update(template) {
        if (!template._id) {
            throw new Error("Id не указан")
        }
        const updatedTemplate = await Template.findByIdAndUpdate(template._id, template, {new: true})
        return updatedTemplate
    }
    async delete(id) {
        if (!id) {
            throw new Error("Id не указан")
        }
        const template = await Template.findByIdAndDelete(id);
        return template
    }
}

module.exports = new TemplateService()