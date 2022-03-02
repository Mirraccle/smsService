const sendService = require("../services/sendService.js");

class SendController{
    async send(req, res) {
        try {
            console.log(req.body)
            if (isNaN(req.body["CdPN"])) {
                return res.redirect('/')
            }
            const message = await sendService.send(req.body);
            // res.end(message)
            res.status(200)
            res.redirect('/')
        } catch (e) {
            console.log(e.message)
            res.redirect('/')
        }
    }

    async getAllMessages(req, res) {
        try{
            const savedMessages = await sendService.getAllMessages()
            console.log(savedMessages)
            return res.json(savedMessages)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}

module.exports = new SendController()