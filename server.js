// for local server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');
// for handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// for routes
const routes = require('./controllers')

// express session
const session = require('express-session');
//const { sequelize } = require('./models/User');
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
  

// turns on handle bars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// test console log
// app.get('/', (req,res) => {
//     res.send('whats goin on??!')
// })
app.use(express.json());
// turn on routes
app.use(routes);

// turns on sequelize session
app.use(session(sess));


app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turns on local server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
