// for local server
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connections');
// const { sequelize } = require('./models/User');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// sets up express.js session and connects to Sequelize database
const sess = {
    secret: 'secret',
    cookie: {},// can add sess length here
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

// turns on sequelize session
app.use(session(sess));
  
const hbs = exphbs.create({})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// for routes

// const routes = require('./controllers')
// express session
// turns on handle bars

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
// turn on routes
// app.use(routes);

app.use(require('./controllers/'));

app.use(require('./controllers/'));

// turns on local server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
