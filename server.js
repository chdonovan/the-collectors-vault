// for local server
const express = require('express');
const app = express();
const port = 3001
// for handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// for routes
//const routes = require('./controllers')



// turns on handle bars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// test console log
app.get('/', (req,res) => {
    res.send('Hello!')
})

// turn on routes
//app.use(routes);

// turns on local server
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
