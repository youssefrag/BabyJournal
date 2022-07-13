const Express = require('express')
const Cors = require('cors')
const App = Express()
const BodyParser = require('body-parser')
const CookieSession = require('cookie-session')
const PORT = 5050;
const authRoutes = require('./routes/auth')

const { Pool } = require('pg');
const dbParams = require("./lib/db.js")
const db = new Pool(dbParams)
db.connect()

App.use(Cors({
  origin: "http://localhost:3000",
  methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  credentials: true,
}))
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static('public'));
App.use(CookieSession({
    name: 'babyjournal',
    keys: ["123"],
    maxAge: 72 * 60 * 60 * 1000, // 72 hours
    httpOnly: false
}));

App.use('/api/auth', authRoutes(db));

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Express is listening on port ${PORT}`);
});