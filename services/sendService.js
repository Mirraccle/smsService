const axios = require("axios");
const SendSms = require("../schemes/sendSchema.js");
const linkForSms = 'http://sms.etc.uz:8084/json2sms?Content-Type=application/json';
axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Methods'] = '*';
class SendService{
    async send(message, user) {
        let data = {
            "login": "sms0034ts_1",
            "pwd": "12345qaz",
            "CgPN": "AnorCorp",
        }
        if(message) {
            message["CdPN"] = "998" + message["CdPN"];
            data = {...data, ...message}
        }
        const createdMessage = await axios.post(linkForSms, JSON.stringify({...data}));
        console.log(data)
        const messageObj = {
            user: user,
            number: message["CdPN"],
            content: message["text"],
            date: new Date()
        }
        await SendSms.create(messageObj)
        return JSON.stringify(messageObj)
        console.log(messageObj)

    }

    async getAllMessages() {
        const sendMessages = await SendSms.find().limit(10)
        console.log(sendMessages)
        return sendMessages
    }
}

module.exports = new SendService()