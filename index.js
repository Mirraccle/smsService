const express = require('express');
const mongoose = require('mongoose');
const templateRouter = require("./routers/templateRouter.js");
const sendRouter = require("./routers/sendRouter.js");
const authRouter = require('./routers/authRouter')
const  exphbs  = require('express-handlebars');
const pages = require("./routers/pages.js");
const cors = require('cors');
const path = require('path');
const bodyParser = require("body-parser");
const session = require('express-session');
const MongoDBSession = require('connect-mongodb-session')(session)
const User = require('./schemes/User')



const PORT = 3000;
const DB_URL = 'mongodb://127.0.0.1:27017/smsDatabase'

const store = new MongoDBSession({
    uri: DB_URL,
    collection: "mySessions"
})

const app = express()
app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(session({
    secret: "Secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 30*60*1000
    },
    store: store,
}))



app.use(express.json())
app.use('/api', templateRouter)
app.use('/api', sendRouter)
app.use('/auth', authRouter)
app.use(pages)
app.use(express.static(path.join(__dirname, '/public')))



const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')








async function startApp() {
    try{
        await mongoose.connect(DB_URL)

        app.listen(PORT, () => console.log('Server started at PORT', + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()