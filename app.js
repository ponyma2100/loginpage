const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userLogin = require('./login')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/welcome', (req, res) => {
  const userInfo = userLogin(req.body)
  if (userInfo) {
    res.render('Welcome', { userInfo })
  } else {
    const alert = `Please Enter Correct Info!`
    res.render('index', { alert })
  }
  // console.log(req.body)
})

app.listen(port, (req, res) => {
  console.log(`Express is listening on localhost:${port}`)
})