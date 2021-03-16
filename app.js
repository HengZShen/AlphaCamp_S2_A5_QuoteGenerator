// Include modules and set server variables
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const chatGenerator = require('./controller/chatGenerator')
const remainCheck = require('./controller/remainCheck')
const checkRadio1 = remainCheck.checkRadio1()
const checkRadio2 = remainCheck.checkRadio2()
const checkRadio3 = remainCheck.checkRadio3()


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
  const target = req.body.selection
  const quote = chatGenerator(target)
  res.render('index', { target, quote })
})





// Start server and listen request
app.listen(port, () => {
  console.log(`The server is running on https://localhost:${port}`)
})