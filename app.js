console.log("Application is starting");

const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000
app.set('view engine','ejs'); 
app.use(express.static('public')) // to serve static files



app.get("/", (req, res, next) => {
    console.log("I received a get request on the path // ")
    let html = ejs.render("homepage.ejs");
    res.render(html)
})

app.get("/welcome", (req, res, next) => {
  console.log("I received a get request on the path // ")
  res.send("<h1 style='color:blue;'>Welcome</h1>")
})



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})