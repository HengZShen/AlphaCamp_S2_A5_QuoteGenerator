// Include modules and set server variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const chatGenerator = require('./controller/chatGenerator')

// Set view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set body parser
app.use(bodyParser.urlencoded({ extended: true }))

// Set static files
app.use(express.static('public'))


// Set routes
app.get('/', (req, res) => {
  res.render('index')
})



app.post('/', (req, res) => {

  const quote = chatGenerator()
  res.render('index', { quote: quote })
})





// Start server and listen request
app.listen(port, () => {
  console.log(`The server is running on https://localhost:${port}`)
})