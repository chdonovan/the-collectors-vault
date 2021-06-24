// for local server
const path = require('path');
const express = require('express');
const app = express();
const port = 3001
// for handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

// for routes
const routes = require('./controllers')

// express session
// const session = require('express-session');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);
// sets up express.js session and connects to Sequelize database
// //const sess = {
//     secret: 'secret',
//     cookie: {},// can add sess length here
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize
//     })
// };
  

// turns on handle bars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// test console log
// app.get('/', (req,res) => {
//     res.send('whats goin on??!')
// })

// turn on routes
app.use(routes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turns on sequelize session
// app.use(session(sess));

// turns on local server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
